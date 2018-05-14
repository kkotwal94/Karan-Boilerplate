export default `
  type Color {
    name: String,
    hex: String,
    createdDate: String,
    updatedDate: String,
    deletedAt: String,
    brand: Brand,
  }

  type Query {
    allColors: [Color],
    aColor(name: String!): Color,
  }
`;
