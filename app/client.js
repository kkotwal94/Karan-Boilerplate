import React, { Component } from 'react';
import { hydrate } from 'react-dom';
import fetch from 'cross-fetch';
import { BrowserRouter } from 'react-router-dom';
import { HttpLink } from 'apollo-link-http';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import createRoutes from './routes';
import CssBaseline from '@material-ui/core/CssBaseline';

class Main extends Component {
  /*
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  */
  render() {
    return <BrowserRouter>{routes}</BrowserRouter>;
  }
}

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: red,
  },
});

const routes = createRoutes();
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: '/graphql', fetch: fetch }),
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
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <Main />
        </CssBaseline>
      </MuiThemeProvider>
    </ApolloProvider>,
    document.getElementById('app')
  );
}
