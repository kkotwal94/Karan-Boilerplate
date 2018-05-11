import { mergeResolvers } from 'merge-graphql-schemas';
import productsQuery from './products';
import usersQuery from './users';

const resolvers = [productsQuery, usersQuery];

export default mergeResolvers(resolvers);
