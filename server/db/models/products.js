import mongoose, { Schema } from 'mongoose';

/**
 * [ProductSchema description]
 * @string category: something/something/something
 * department is a top level category
 */
const ProductSchema = new mongoose.Schema(
  {
    id: String,
    style: String,
    description: String,
    department: { type: Schema.ObjectId, ref: 'Category' },
    category: { type: Schema.ObjectId, ref: 'Category' },
    brand: { type: Schema.ObjectId, ref: 'Brands' },
    thumbnail: String,
    modelImage: String,
    shipping: {
      dimensions: {
        height: String,
        length: String,
        width: String,
      },
      weight: String,
    },
    pricing: { type: Schema.ObjectId, ref: 'Pricing' },
    rating: Number,
    meta: { type: Schema.ObjectId, ref: 'Meta' },
    attributes: [{ type: Schema.ObjectId, ref: 'Attributes' }],
    secondaryAttributes: [{ type: Schema.ObjectId, ref: 'Attributes' }],
    supplier: { type: Schema.ObjectId, ref: 'Suppliers' },
    variants: [{ type: Schema.ObjectId, ref: 'Variants' }],
    deletedAt: { type: Date },
  },
  { timestamps: true }
);

ProductSchema.index({ _id: 1, department: 1, category: 1, updatedDate: 1 });
export default mongoose.model('Products', ProductSchema);
