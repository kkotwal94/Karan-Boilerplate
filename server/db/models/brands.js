import mongoose, { Schema } from 'mongoose';

const BrandSchema = new mongoose.Schema(
  {
    name: String,
    colors: [{ type: Schema.ObjectId, ref: 'Colors' }],
  },
  { timestamps: true }
);

export default mongoose.model('Brands', BrandSchema);
