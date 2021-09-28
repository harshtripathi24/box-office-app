import React from 'react';
import ActorGrid from './actor/ActorGrid';
import ShowGrid from './show/ShowGrid';

const Result = ({ result }) => {
  const resultDisplay = () => {
    if (result && result.length === 0) {
      return <div> No Result</div>;
    }
    if (result && result.length > 0) {
      if (result[0].show) {
        return <ShowGrid result={result} />;
      }
      if (result[0].person) {
        return <ActorGrid result={result} />;
      }
    }

    return null;
  };
  return <div>{resultDisplay()}</div>;
};

export default Result;
