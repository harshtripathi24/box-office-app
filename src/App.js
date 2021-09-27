import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        Home
      </Route>
      <Route exact path="/start">
        Start
      </Route>
      <Route path="*">This is 404 Page</Route>
    </Switch>
  );
}

export default App;
