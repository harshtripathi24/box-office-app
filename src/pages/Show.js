/* eslint-disable no-underscore-dangle */
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router';
import Loading from '../components/Loading';
import MainPageLayout from '../components/MainPageLayout';
import ShowCasts from '../components/show/ShowCasts';
import ShowDetails from '../components/show/ShowDetails';
import ShowMainData from '../components/show/ShowMainData';
import ShowSeasons from '../components/show/ShowSeasons';
import { ShowPageWrapper, InfoBlock } from './Show.styled';

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
    return <Loading />;
  }
  if (isError) {
    return <div>Error occured {isError}</div>;
  }
  return (
    <ShowPageWrapper>
      <MainPageLayout />
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />

      <InfoBlock>
        <h2>Details</h2>
        <ShowDetails
          status={show.status}
          newtork={show.newtork}
          premiered={show.premiered}
        />
      </InfoBlock>
      <InfoBlock>
        <h2>Seasons</h2>
        <ShowSeasons seasons={show._embedded.seasons} />
      </InfoBlock>
      <InfoBlock>
        <h2>Casts</h2>
        <ShowCasts cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
