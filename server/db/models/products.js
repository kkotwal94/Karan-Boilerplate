import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  id: String,
  style: String,
  date: { type: Date, default: Date.now },
  description: String,
  colors: [{ type: Schema.ObjectId, ref: 'Colors' }],
  supplier: { type: Schema.ObjectId, ref: 'Suppliers' },
});

export default mongoose.model('Products', ProductSchema);
