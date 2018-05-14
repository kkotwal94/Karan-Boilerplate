export default `
  type Description {
    product: Product,
    language: String,
    title: String,
    description: String,
    shortDescription: String,
    createdDate: String,
    updatedDate: String,
    deletedAt: String,
  }

  type Query {
    allDescriptions: [Description],
    aDescription(id: String!): Description,
  }
`;
