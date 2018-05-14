import Colors from '../../db/models/colors';

export default {
  Query: {
    allColors: async () => {
      const colors = await Colors.find().populate('brand');
      return colors;
    },
    aColor: async (root, { name }) => {
      const color = await Colors.findOne({ name }).populate('brand');
      return color;
    },
  },
};
