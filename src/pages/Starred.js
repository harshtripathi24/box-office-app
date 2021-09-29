import React, { useState, useEffect } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../components/misc/config';
import { useShow } from '../components/misc/CustomHooks';
import ShowGrid from '../components/show/ShowGrid';

const Starred = () => {
  const [starred] = useShow();
  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setISError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showsId => apiGet(`/shows/${showsId}`));

      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShows(results);
          setIsLoading(false);
        })
        .catch(error => {
          setISError(error.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);
  return (
    <MainPageLayout>
      {isLoading && <div>Shows are Loading......</div>}
      {isError && <div>Error occured :{isError}</div>}
      {!isLoading && !shows && <div>No Shows Were Added</div>}
      {!isLoading && !isError && shows && <ShowGrid result={shows} />}
    </MainPageLayout>
  );
};

export default Starred;
