export default `
  type Brand {
    name: String,
    createdDate: String,
    updatedDate: String,
    colors: [Color],
  }

  type Query {
    allBrands: [Brand],
    aBrand(name: String!): Brand
  }
`;
