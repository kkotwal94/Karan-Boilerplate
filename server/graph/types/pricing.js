export default `
  type Pricing {
    price: String,
    currency: String,
    sale: Sale,
    createdDate: String,
    updatedDate: String,
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
