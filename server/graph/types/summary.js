export default `
  type Summary {
    style: String,
    department: Category,
    category: Category,
    thumbnail: String,
    price: Pricing,
    rating: Int,
    attributes: [Attribute],
    secondaryAttributes: [Attribute],
    variants: [Variant],
    createdAt: String,
    updatedAt: String,
    deletedAt: String,
  }

  type Query {
    allSummaries: [Summary],
    aSummary(style: String!): Summary,
  }
`;
