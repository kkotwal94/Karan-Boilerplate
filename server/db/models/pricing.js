import mongoose, { Schema } from 'mongoose';

/**
 * [PricingSchema description]
 * @id : Id of this model should be SKU_StoreId
 */
const PricingSchema = new mongoose.Schema(
  {
    price: String,
    currency: { type: String, default: 'USD' },
    sale: {
      salePrice: String,
      saleStartDate: String,
      saleEndDate: String,
    },
    deletedAt: { type: Date },
  },
  { timestamps: true }
);

PricingSchema.index({ updatedAt: 1 });

export default mongoose.model('Pricing', PricingSchema);
