import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  id: String,
  style: String,
  date: { type: Date, default: Date.now },
  description: String,
});

export default mongoose.model('Products', ProductSchema);
