export default `
  type Variant {
    id: String,
    thumbnail: String,
    modelImage: String,
    product: Product,
    size: Size,
    color: Color,
    attributes: [Attribute],
    secondaryAttributes: [Attribute],
    createdDate: String,
    updatedDate: String,
    deletedAt: String,
  }

  type Query {
    allVariants: [Variant],
    aVariant(id: String!): Variant,
  }
`;
