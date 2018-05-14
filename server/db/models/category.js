import mongoose, { Schema } from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: String,
  count: Number,
  slug: String,
  parentCategory: { type: Schema.ObjectId, refs: 'Category' },
  facets: [{ type: Schema.ObjectId, refs: 'Facets' }],
}, { timestamps: true });

export default mongoose.model('Category', CategorySchema);
