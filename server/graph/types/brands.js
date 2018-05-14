export default `
  type Brand {
    name: String,
    createdAt: String,
    updatedAt: String,
    colors: [Color],
  }

  type Query {
    allBrands: [Brand],
    aBrand(name: String!): Brand
  }
`;
