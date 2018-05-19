import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { Route, Switch } from 'react-router';
import routes from './routes';
import Home from './Home';
import NotFound from './NotFound';

class App extends Component {
  render() {
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/NotFound" component={NotFound} />
    </Switch>;
  }
}
export default App;
