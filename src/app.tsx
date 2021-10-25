import React from 'react';

import { Switch, Route } from 'react-router-dom';

import MarkupLayout from './layouts/markupLayout';
import RouterLayout from './layouts/routerLayout';

import Main from './pages/main';
import Order from './pages/order';
import Reviews from './pages/reviews';

import './styles/common.css';

export default () => (
  <RouterLayout>
    <MarkupLayout>
      <Switch>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </MarkupLayout>
  </RouterLayout>
);
