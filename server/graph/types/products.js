export default `
  type Product {
    id: String,
    style: String,
    description: String,
  }

  type Query {
    allProducts: [Product]
    aProduct(id: String!): Product
  }
`;
