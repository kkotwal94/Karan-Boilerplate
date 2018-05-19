import React, { Component } from 'react';
import { hydrate } from 'react-dom';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import App from './App';

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'));
}
