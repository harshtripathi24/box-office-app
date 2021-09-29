import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router';

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return { isLoading: false, isError: null, show: action.show };
    }
    case 'FETCH_FAILED': {
      return { ...prevState, isLoading: false, isError: action.message };
    }

    default:
      return prevState;
  }
};

const initialState = {
  show: null,
  isLoading: true,
  isError: null,
};

const Show = () => {
  const { id } = useParams();

  const [{ show, isLoading, isError }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`
        );
        const data = await res.json();
        setTimeout(() => {
          if (isMounted) {
            dispatch({ type: 'FETCH_SUCCESS', show: data });
          }
        }, 2000);
      } catch (error) {
        if (isMounted) {
          dispatch({ type: 'FETCH_FAILED', message: error.message });
        }
      }

      return () => {
        isMounted = false;
      };
    };

    fetchData();
  }, [id]);

  console.log(show);
  if (isLoading) {
    return <div>Is Loading</div>;
  }
  if (isError) {
    return <div>Error occured {isError}</div>;
  }
  return <div>Data Loaded</div>;
};

export default Show;
