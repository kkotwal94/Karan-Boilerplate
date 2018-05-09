import { GraphQLObjectType, GraphQLList } from 'graphql';
import types from '../types';
import ProductsModel from '../../db/models/products';

const { Product } = types;

const productsQuery = new GraphQLObjectType({
  name: 'allProducts',
  fields: () => ({
    products: {
      type: new GraphQLList(Product),
      resolve: () => {
        ProductsModel.find({}).exec((err, products) => {
          if (err) {
            return new Error("Couldn't Fetch Errors");
          }
          return products;
        });
      },
    },
  }),
});

export default productsQuery;
