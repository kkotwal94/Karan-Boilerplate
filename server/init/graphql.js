import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from '../graph';

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
