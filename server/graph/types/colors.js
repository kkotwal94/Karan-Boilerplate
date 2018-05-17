export default `
  type Color {
    _id: ID,
    name: String,
    hex: String,
    deletedAt: String,
    brand: Brand,
    createdAt: String,
    updatedAt: String,
  }

  type Query {
    allColors: [Color],
    aColor(name: String!): Color,
  }

  input ColorInput {
    name: String,
    hex: String,
    brand: ID,
  }

  type Mutation {
    addColor(
      color: ColorInput
    ): Color

    updateColor(
      id: ID!
      color: ColorInput
    ): Color

    removeColor(
      id: ID!
    ): Color
  }
`;
