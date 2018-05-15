import mongoose, { Schema } from 'mongoose';

const SummarySchema = new mongoose.Schema(
  {
    style: String,
    department: String,
    category: String,
    thumbnail: String,
    price: String,
    rating: Number,
    attributes: [{ type: Schema.ObjectId, ref: 'Attributes' }],
    secondaryAttributes: [{ type: Schema.ObjectId, ref: 'Attributes' }],
    lStyle: String,
    images: [{ type: Schema.ObjectId, ref: 'Images' }],
    itemDescription: { type: Schema.ObjectId, ref: 'Description' },
    variants: [{ type: Schema.ObjectId, ref: 'Variants' }],
    deletedAt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model('Summary', SummarySchema);
