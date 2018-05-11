import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import { buildSchema } from 'graphql';
import ProductsModel from '../db/models/products';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from '../graph/types';
import resolvers from '../graph/queries';

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default app => {
  app.post(
    '/graphql',
    bodyParser.json(),
    graphqlExpress(req => ({
      schema,
      context: {
        user: req.user,
      },
    }))
  );
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
};
