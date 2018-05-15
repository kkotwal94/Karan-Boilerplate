import mongoose, { Schema } from 'mongoose';

const AttributeSchema = new mongoose.Schema(
  {
    key: String,
    value: String,
  },
  { timestamps: true }
);

export default mongoose.model('Attributes', AttributeSchema);
