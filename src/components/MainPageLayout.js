import React from 'react';

import Navs from './Nav';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box Office App"
        subtitle="Are you looking for a movie or an actor"
      />
      <Navs />
      {children}
    </div>
  );
};

export default MainPageLayout;
