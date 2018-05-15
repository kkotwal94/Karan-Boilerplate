import mongoose, { Schema } from 'mongoose';

const DescriptionSchema = new mongoose.Schema(
  {
    product: { type: Schema.ObjectId, ref: 'Products' },
    language: { type: String, default: 'en' },
    title: String,
    description: String,
    shortDescription: String,
    deletedAt: { type: Date },
  },
  { timestamps: true }
);

DescriptionSchema.index({ product: 1 });

export default mongoose.model('Description', DescriptionSchema);
