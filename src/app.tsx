import React from 'react';

import { Switch, Route } from 'react-router-dom';

import MarkupLayout from '@sush/layouts/markupLayout';
import RouterLayout from '@sush/layouts/routerLayout';

import Main from '@sush/pages/main';
import Order from '@sush/pages/order';
import Reviews from '@sush/pages/reviews';
import Goods from '@sush/pages/goods';
import Meal from '@sush/pages/meal';

import '@sush/styles/common.css';

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
        <Route path="/goods/:goodsId">
          <Goods />
        </Route>
        <Route path="/meal/:mealId">
          <Meal />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </MarkupLayout>
  </RouterLayout>
);
