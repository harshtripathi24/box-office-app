import React from 'react';

const Result = ({ result }) => {
  const resultDisplay = () => {
    if (result && result.length === 0) {
      return <div> No Result</div>;
    }
    if (result && result.length > 0) {
      return (
        <div>
          {result.map(item => {
            return (
              <div key={item.show.id}>
                <p>{item.show.name}</p>
              </div>
            );
          })}
        </div>
      );
    }

    return null;
  };
  return <div>{resultDisplay()}</div>;
};

export default Result;
