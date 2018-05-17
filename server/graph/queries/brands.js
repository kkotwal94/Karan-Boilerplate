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
      const addedBrand = await Brands.create(brand);
      const populatedBrands = await Brands.findById(addedBrand._id).populate('colors');
      console.log(populatedBrands);
      return populatedBrands;
    },
    updateBrand: async (root, { id, brand }) => {
      const updatedBrand = await Brands.findByIdAndUpdate(id, brand);
      const populatedBrands = await Brands.findById(updatedBrand._id).populate('colors');
      console.log(populatedBrands);
      return populatedBrands;
    },
    removeBrand: async (root, { id }) => {
      const rem = await Brands.findByIdAndRemove(id);
      console.log(rem);
      return rem;
    },
    addColorToBrand: async (root, { id, colorId }) => {
      const brandModel = await Brands.findById(id);
      const colors = brandModel.colors;
      const exists = colors.indexOf(colorId);
      if (exists < 0) {
        colors.push(colorId);
        await brandModel.save();
      }
      console.log(brandModel);
      const populatedBrand = await Brands.findById(id).populate('colors');
      console.log(populatedBrand);
      return populatedBrand;
    },
    removeColorFromBrand: async (root, { id, colorId }) => {
      const brandModel = await Brands.findById(id);
      const colors = brandModel.colors;
      const exists = colors.indexOf(colorId);
      if (exists > -1) {
        colors.splice(exists, 1);
        await brandModel.save();
      }
      const populatedBrand = await Brands.findById(id).populate('colors');
      console.log(populatedBrand);
      return populatedBrand;
    },
  },
};
