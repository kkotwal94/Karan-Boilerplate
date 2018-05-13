import mongoose, { Schema } from 'mongoose';

const SizeSchema = new mongoose.Schema({
  name: String,
  identifier: String,
  description: String,
  displayOrder: Number,
  createdDate: { type: Date, default: Date.now() },
  updatedDate: { type: Date },
  deletedAt: { type: Date },
});

export default mongoose.model('Sizes', SizeSchema);
