export default `
  type Description {
    product: Product,
    language: String,
    title: String,
    description: String,
    shortDescription: String,
    createdAt: String,
    updatedAt: String,
    deletedAt: String,
  }

  type Query {
    allDescriptions: [Description],
    aDescription(id: String!): Description,
  }
`;
