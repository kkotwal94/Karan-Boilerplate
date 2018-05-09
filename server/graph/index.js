import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import queries from './queries';

const { productsQuery, usersQuery } = queries;

const Query = new GraphQLObjectType({
  name: 'Schema',
  description: 'Root of the Schema',
  fields: () => ({
    allUsers: {
      type: usersQuery,
      description: 'Gets all Users',
    },
    allProducts: {
      type: productsQuery,
      description: 'Gets all Products',
    },
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
});

export default Schema;
