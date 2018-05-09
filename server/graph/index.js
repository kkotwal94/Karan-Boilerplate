import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { productsQuery } from './queries/products';
import { usersQuery } from './queries/users';

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
