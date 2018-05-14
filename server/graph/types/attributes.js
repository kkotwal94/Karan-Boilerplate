export default `
  type Attribute {
    key: String,
    value: String,
    createdAt: String,
    updatedAt: String,
  }

  type Query {
    allAttributes: [Attribute],
    anAttribute(key: String!): Attribute,
  }
`;
