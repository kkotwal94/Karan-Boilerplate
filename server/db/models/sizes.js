import mongoose, { Schema } from 'mongoose';

const SizeSchema = new mongoose.Schema(
  {
    name: String,
    identifier: String,
    description: String,
    displayOrder: Number,
    deletedAt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model('Sizes', SizeSchema);
