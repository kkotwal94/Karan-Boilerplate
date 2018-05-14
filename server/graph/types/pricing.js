export default `
  type Pricing {
    price: String,
    currency: String,
    sale: Sale,
    createdAt: String,
    updatedAt: String,
    deletedAt: String
  }

  type Sale {
    salePrice: String,
    saleStartDate: String,
    saleEndDate: String,
  }

  type Query {
    allPricing: [Pricing],
    aPricing(price: String!): Pricing
  }
`;
