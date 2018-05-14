export default `
  type Attribute {
    key: String,
    value: String,
  }

  type Query {
    allAttributes: [Attribute],
    anAttribute(key: String!): Attribute,
  }
`;
