import Brands from '../../db/models/brands';

export default {
  Query: {
    allBrands: async () => {
      const brands = await Brands.find();
      console.log(brands);
      return brands;
    },
    aBrand: async (root, { name }) => {
      const brand = await Brands.findOne({ name });
      return brands;
    },
  },
};
