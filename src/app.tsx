import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/main';

export default () => (
  <>
    <Router>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  </>
);
