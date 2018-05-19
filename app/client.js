import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

class Client extends Component {
  render() {
    console.log(this.props);
    console.log('What?');
    return <div>This is our entry point for now</div>;
  }
}
export default Client;
