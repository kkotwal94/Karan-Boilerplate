import mongoose, { Schema } from 'mongoose';

const MetaSchema = new mongoose.Schema({
  title: String,
  description: String,
  keywords: [String],
});

export default mongoose.model('Meta', MetaSchema);
