export default `
  type Brand {
    _id: ID!,
    name: String,
    colors: [Color],
    createdAt: String,
    updatedAt: String,
  }

  type BrandFlat {
    _id: ID!,
    name: String,
    colors: [ID],
    createdAt: String,
    updatedAt: String,
  }

  type Query {
    allBrands: [Brand],
    aBrand(name: String!): Brand
  }

  input BrandInput {
    name: String,
    colors: [ID],
  }

  type Mutation {
    addBrand(
      brand: BrandInput
    ): Brand

    updateBrand(
      id: ID!
      brand: BrandInput
    ): Brand

    removeBrand(
      id: ID!
    ): Brand

    addColorToBrand(
      id: ID!
      colorId: ID!
    ) : Brand

    removeColorFromBrand(
      id: ID!
      colorId: ID!
    ) : Brand
  }
`;
