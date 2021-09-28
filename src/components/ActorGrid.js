import React from 'react';
import ActorCard from './ActorCard';

import imgNotFound from '../images/image-not-found.png';

const ActorGrid = ({ result }) => {
  return (
    <div>
      {result.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : imgNotFound}
        />
      ))}
    </div>
  );
};

export default ActorGrid;
