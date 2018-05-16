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
    ): BrandFlat

    updateBrand(
      id: ID!
      brand: BrandInput
    ): BrandFlat

    removeBrand(
      id: ID!
    ): BrandFlat

    addColor(
      id: ID!
      colorId: ID!
    ) : BrandFlat

    removeColor(
      id: ID!
      colorId: ID!
    ) : BrandFlat
  }
`;
