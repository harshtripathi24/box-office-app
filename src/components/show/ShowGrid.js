import React from 'react';
import ShowCards from './ShowCards';

import imgNotFound from '../../images/image-not-found.png';
import { FlexGrid } from '../styled';

const ShowGrid = ({ result }) => {
  return (
    <FlexGrid>
      {result.map(item => (
        <ShowCards
          key={item.show.id}
          id={item.show.id}
          showName={item.show.name}
          img={item.show.image ? item.show.image.medium : imgNotFound}
          summary={item.show.summary}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
