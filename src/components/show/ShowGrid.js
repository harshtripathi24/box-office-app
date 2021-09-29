import React from 'react';
import ShowCards from './ShowCards';

import imgNotFound from '../../images/image-not-found.png';
import { FlexGrid } from '../styled';
import { useShow } from '../misc/CustomHooks';

const ShowGrid = ({ result }) => {
  const [starredShows, dispatchStarred] = useShow();
  return (
    <FlexGrid>
      {result.map(item => {
        const isStarred = starredShows.includes(item.show.id);

        const onStarClick = () => {
          if (isStarred) {
            dispatchStarred({ type: 'REMOVE', showId: item.show.id });
          } else {
            dispatchStarred({ type: 'ADD', showId: item.show.id });
          }
        };

        return (
          <ShowCards
            key={item.show.id}
            id={item.show.id}
            showName={item.show.name}
            img={item.show.image ? item.show.image.medium : imgNotFound}
            summary={item.show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
