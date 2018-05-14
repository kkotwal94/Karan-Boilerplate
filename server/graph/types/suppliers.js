export default `
  type Supplier {
    name: String,
    description: String,
    displayOrder: Int,
    products: [Product],
    createdAt: String,
    updatedAt: String,
  }

  type Query {
    allSuppliers: [Supplier],
    aSupplier(name: String!): Supplier,
  }
`;
