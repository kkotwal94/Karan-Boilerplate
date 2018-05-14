import { mergeResolvers } from 'merge-graphql-schemas';
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from 'graphql-iso-date';
import productsQuery from './products';
import usersQuery from './users';
import brandsQuery from './brands';
import colorsQuery from './colors';

const DateTimeResolver = {
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,
};

const resolvers = [productsQuery, usersQuery, brandsQuery, colorsQuery];

export default mergeResolvers(resolvers);
