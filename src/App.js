import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Nav';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <div>
      <Navs />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>
        <Route path="*">This is 404 Page</Route>
      </Switch>
    </div>
  );
}

export default App;