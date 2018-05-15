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
`;
