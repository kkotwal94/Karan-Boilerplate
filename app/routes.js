import React from 'react';
import { Route, Switch } from 'react-router';
import NotFound from './NotFound';
import Home from './Home';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
