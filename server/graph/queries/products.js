import { GraphQLObjectType, GraphQLList } from 'graphql';
import { Product } from '../types/products';
import ProductsModel from '../../db/models/products';

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

export default {
  productsQuery,
};
