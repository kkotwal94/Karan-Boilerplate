export default `
  type Supplier {
    name: String,
    description: String,
    displayOrder: Int,
    products: [Product]
  }

  type Query {
    allSuppliers: [Supplier],
    aSupplier(name: String!): Supplier,
  }
`;
