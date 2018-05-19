import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import App from './App';

const client = new ApolloClient({
  ssrForceFetchDelay: 100,
  link: createHttpLink({
    uri: 'graphql',
    fetch: fetch,
    credentials: 'same-origin',
    headers: {
      cookie: req.header('Cookie'),
    },
  }),
  connectToDevTools: true,
  cache: new InMemoryCache(),
});

hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('app')
);
