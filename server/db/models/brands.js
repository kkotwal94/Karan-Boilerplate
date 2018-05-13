import mongoose, { Schema } from 'mongoose';

const BrandSchema = new mongoose.Schema({
  name: String,
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  deletedAt: { type: Date },
  colors: [{ type: Schema.ObjectId, ref: 'Colors' }],
});
