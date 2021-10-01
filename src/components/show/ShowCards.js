import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Star } from '../styled';

import { StyledShowCard } from './StyledShowCard';

const ShowCard = ({ id, img, name, summary, onStarClick, isStarred }) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';

  console.log('Renderd');

  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={img} alt="show" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div className="btns">
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button" onClick={onStarClick}>
          <Star active={isStarred} />
        </button>
      </div>
    </StyledShowCard>
  );
};

export default memo(ShowCard);
