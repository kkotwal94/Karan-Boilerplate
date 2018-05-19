import React from 'react';
import { Route, Switch } from 'react-router';
import NotFound from './Screens/NotFound';
import Home from './Screens/Home';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
