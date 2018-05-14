export default `
  type Size {
    name: String,
    identifier: String,
    description: String,
    displayOrder: Int,
    createdDate: String,
    updatedDate: String,
    deletedAt: String,
  }

  type Query {
    allSizes: [Size],
    aSize(name: String!): Size,
  }
`;
