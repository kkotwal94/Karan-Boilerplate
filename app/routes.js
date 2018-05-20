import React from 'react';
import { Route, Switch } from 'react-router';
import App from './Screens/App/App';
import NotFound from './Screens/NotFound/NotFound';

export default () => {
  return (
    <Switch>
      <Route path="/" component={App} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
