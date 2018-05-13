import mongoose, { Schema } from 'mongoose';

/**
 * [PricingSchema description]
 * @id : Id of this model should be SKU_StoreId
 */
const PricingSchema = new mongoose.Schema({
  price: String,
  currency: { type: String, default: 'USD' },
  sale: {
    salePrice: String,
    saleStartDate: String,
    saleEndDate: String,
  },
  createdDate: { type: Date, default: Date.now() },
  updatedDate: { type: Date },
  deletedAt: { type: Date },
});

PricingSchema.index({ updatedAt: 1 });

export default mongoose.model('Pricing', PricingSchema);
