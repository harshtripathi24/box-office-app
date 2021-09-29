import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`
        );
        const data = await res.json();
        setTimeout(() => {
          if (isMounted) {
            setShow(data);
            setIsLoading(false);
          }
        }, 2000);
      } catch (error) {
        if (isMounted) {
          setIsError(error);
          setIsLoading(false);
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
    return <div>fdsf</div>;
  }
  return <div>Error occured {isError}</div>;
};

export default Show;
