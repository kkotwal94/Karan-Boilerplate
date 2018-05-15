import Brands from '../../db/models/brands';

export default {
  Query: {
    allBrands: async () => {
      const brands = await Brands.find().populate('colors');
      console.log(brands);
      return brands;
    },
    aBrand: async (root, { name }) => {
      const brand = await Brands.findOne({ name }).populate('colors');
      return brands;
    },
  },
  Mutation: {
    addBrand: async (root, { brand }) => {
      console.log(brand);
      return await Brands.create(brand);
    },
  },
};
