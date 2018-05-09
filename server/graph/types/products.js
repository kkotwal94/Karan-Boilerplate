import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLScalarType,
} from 'graphql';

const Product = new GraphQLObjectType({
  name: 'product',
  description: 'Products such as T-Shirts',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    style: {
      type: GraphQLString,
      description: 'Product Name',
    },
    description: {
      type: GraphQLString,
      description: 'Product description',
    },
  }),
});

export default {
  Product,
};
