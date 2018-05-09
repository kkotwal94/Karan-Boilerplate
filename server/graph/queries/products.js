import { GraphQLObjectType, GraphQLList } from 'graphql';
import types from '../types';
import ProductsModel from '../../db/models/products';

const { Product } = types;

console.log(Product);

const productsQuery = new GraphQLObjectType({
  name: 'allProducts',
  fields: () => ({
    products: {
      type: new GraphQLList(Product),
      resolve: () => {
        const products = ProductsModel.find().exec();
        if (products) {
          throw new Error('Error');
        }
        return products;
      },
    },
  }),
});

export default productsQuery;
