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
  Mutation: {
    addColor: async (root, { color }) => {
      const addedColor = await Colors.create(color);
      const populatedColor = await Colors.findById(addedColor._id).populate('brand');
      return populatedColor;
    },
    updateColor: async (root, { id, color }) => {
      const updatedColor = await Colors.findByIdAndUpdate(id, color);
      const populatedColor = await Colors.findById(updatedColor._id).populate('brand');
      return populatedColor;
    },
    removeColor: async (root, { id }) => {
      return await Colors.findByIdAndRemove(id);
    },
  },
};
