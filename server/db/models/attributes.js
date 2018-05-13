import mongoose, { Schema } from 'mongoose';

const AttributeSchema = new mongoose.Schema({
  key: String,
  value: String,
});

export default mongoose.model('Attributes', AttributeSchema);
