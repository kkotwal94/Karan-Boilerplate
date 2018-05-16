import Brands from '../../db/models/brands';
import _ from 'lodash';

export default {
  Query: {
    allBrands: async () => {
      const brands = await Brands.find().populate('colors');
      console.log(brands);
      return brands;
    },
    aBrand: async (root, { name }) => {
      const brand = await Brands.findOne({ name }).populate('colors');
      console.log(brand);
      return brand;
    },
  },
  Mutation: {
    addBrand: async (root, { brand }) => {
      return await Brands.create(brand);
    },
    updateBrand: async (root, { id, brand }) => {
      return await Brands.findByIdAndUpdate(id, brand);
    },
    removeBrand: async (root, { id }) => {
      const rem = await Brands.findByIdAndRemove(id);
      console.log(rem);
      return rem;
    },
    addColor: async (root, { id, colorId }) => {
      const brandModel = await Brands.findById(id);
      const colors = brandModel.colors;
      const exists = colors.indexOf(colorId);
      console.log(exists);
      if (exists < 0) {
        colors.push(colorId);
        brandModel.save();
      }
      console.log(brandModel);
      return brandModel;
    },
    removeColor: async (root, { id, colorId }) => {
      const brandModel = await Brands.findById(id);
      const colors = brandModel.colors;
      const exists = colors.indexOf(colorId);
      if (exists > -1) {
        colors.splice(exists, 1);
        brandModel.save();
      }
      return brandModel;
    },
  },
};
