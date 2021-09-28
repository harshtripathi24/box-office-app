import React from 'react';
import ShowCards from './ShowCards';

import imgNotFound from '../images/image-not-found.png';

const ShowGrid = ({ result }) => {
  return (
    <div>
      {result.map(item => (
        <ShowCards
          key={item.show.id}
          id={item.show.id}
          showName={item.show.name}
          img={item.show.image ? item.show.image.medium : imgNotFound}
          summary={item.show.summary}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
