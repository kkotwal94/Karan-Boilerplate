export default `
  type Product {
    id: String,
    style: String,
    description: String,
    department: Category,
    category: Category,
    brand: Brand,
    thumbnail: String,
    modelImage: String,
    pricing: Pricing,
    rating: Int,
    meta: Meta,
    attributes: [Attribute],
    secondaryAttributes: [Attribute],
    supplier: Supplier,
    variants: [Variant],
    createdDate: String,
    updatedDate: String,
    deletedAt: String,
  }

  type Query {
    allProducts: [Product]
    aProduct(id: String!): Product
  }
`;
