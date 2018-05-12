import mongoose from 'mongoose';

const ColorSchema = new mongoose.Schema({
  name: String,
  hex: String,
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  deletedAt: { type: Date },
  products: [{ type: Schema.ObjectId, ref: 'Products' }],
  brand: { type: Schema.ObjectId, ref: 'Brands' },
});

export default mongoose.model('Colors', ColorSchema);
