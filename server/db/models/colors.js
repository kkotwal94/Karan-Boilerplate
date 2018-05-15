import mongoose, { Schema } from 'mongoose';

const ColorSchema = new mongoose.Schema(
  {
    name: String,
    hex: String,
    deletedAt: { type: Date },
    brand: { type: Schema.ObjectId, ref: 'Brands' },
  },
  { timestamps: true }
);

export default mongoose.model('Colors', ColorSchema);
