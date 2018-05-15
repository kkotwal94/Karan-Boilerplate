export default `
  type Brand {
    _id: ID!,
    name: String,
    colors: [Color],
    createdAt: String,
    updatedAt: String,
  }

  type Query {
    allBrands: [Brand],
    aBrand(name: String!): Brand
  }

  input BrandInput {
    name: String!,
    colors: [ID],
  }

  type Mutation {
    addBrand(
      brand: BrandInput
    ): Brand
  }
`;
