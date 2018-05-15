import mongoose, { Schema } from 'mongoose';

const FacetSchema = new mongoose.Schema(
  {
    name: String,
    value: String,
    count: Number,
  },
  { timestamps: true }
);

export default mongoose.model('Facets', FacetSchema);
