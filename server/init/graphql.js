import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import { buildSchema } from 'graphql';
import ProductsModel from '../db/models/products';
import { makeExecutableSchema } from 'graphql-tools';
// import schema from '../graph';

const products = [
  {
    id: '1',
    style: 'G200',
    description: 'A tshirt',
  },
  {
    id: '2',
    style: 'T200',
    description: 'T200 shirt',
  },
];

const typeDefs = `
  type Product {
    id: String,
    style: String,
    description: String,
  }

  type Query {
    allProducts: [Product]
  }
`;

const resolvers = {
  Query: {
    allProducts: async () => {
      const products = await ProductsModel.find();
      console.log(products);
      return products;
    },
  },
};

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
