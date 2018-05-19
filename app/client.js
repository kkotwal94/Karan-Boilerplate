import React, { Component } from 'react';
import { hydrate } from 'react-dom';
import fetch from 'cross-fetch';
import { BrowserRouter } from 'react-router-dom';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import createRoutes from './routes';

const routes = createRoutes();
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: 'http://localhost:3000/graphql', fetch: fetch }),
  // here we're initializing the cache with the data from the server's cache
});

// This query is just a test to make sure its connected to gql

client
  .query({
    query: gql`
      {
        allBrands {
          _id
          name
        }
      }
    `,
  })
  .then(result => console.log(result));

if (typeof window !== 'undefined') {
  hydrate(
    <ApolloProvider client={client}>
      <BrowserRouter>{routes}</BrowserRouter>
    </ApolloProvider>,
    document.getElementById('app')
  );
}
