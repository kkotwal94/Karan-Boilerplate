export default `
  type Color {
    name: String,
    hex: String,
    createdDate: String,
    updatedDate: String,
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
