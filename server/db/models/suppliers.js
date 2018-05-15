import mongoose, { Schema } from 'mongoose';

const SupplierSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    displayOrder: Number,
    products: [{ type: Schema.ObjectId, ref: 'Products' }],
  },
  { timestamps: true }
);

export default mongoose.model('Suppliers', SupplierSchema);
