import ProductsModel from '../../db/models/products';

export default {
  Query: {
    allProducts: async () => {
      const products = await ProductsModel.find();
      console.log(products);
      return products;
    },
    aProduct: async (root, { id }) => {
      const product = await ProductsModel.findOne({ id });
      console.log(product);
      return product;
    },
  },
};
