import mongoose, { Schema } from 'mongoose';

// Id: SKU

const VariantSchema = new mongoose.Schema({
  id: String, // Sku
  thumbnail: String,
  modelImage: String,
  product: { type: Schema.ObjectId, ref: 'Products' }, // Product
  size: { type: Schema.ObjectId, ref: 'Sizes' }, // Size
  color: { type: Schema.ObjectId, ref: 'Colors' }, // Color
  attributes: [{ type: Schema.ObjectId, ref: 'Attributes' }],
  secondaryAttributes: [{ type: Schema.ObjectId, ref: 'Attributes' }],
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date },
  deletedAt: { type: Date },
});

VariantSchema.index({ product: 1, updatedDate: 1 });
export default mongoose.model('Variants', VariantSchema);
