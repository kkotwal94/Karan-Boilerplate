export default `
  type Size {
    name: String,
    identifier: String,
    description: String,
    displayOrder: Int,
    createdAt: String,
    updatedAt: String,
    deletedAt: String,
  }

  type Query {
    allSizes: [Size],
    aSize(name: String!): Size,
  }
`;
