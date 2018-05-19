import React, { Component } from 'react';
import { hydrate } from 'react-dom';
import fetch from 'cross-fetch';
import { BrowserRouter } from 'react-router-dom';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import App from './App';
import createRoutes from './routes';

const routes = createRoutes();
/*const client = new ApolloClient({
  ssrForceFetchDelay: 100,
  link: createHttpLink({
    uri: 'http://localhost:3000/graphql',
    fetch: fetch,
  }),
  connectToDevTools: true,
  // here we're initializing the cache with the data from the server's cache
  cache: new InMemoryCache(),
});
*/

if (typeof window !== 'undefined') {
  hydrate(<BrowserRouter>{routes}</BrowserRouter>, document.getElementById('app'));
}
