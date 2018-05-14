export default `
  type Category {
    name: String,
    slug: String,
    count: Int,
    parentCategory: Category,
    facets: [Facet],
    createdAt: String,
    updatedAt: String,
  }

  type Query {
    allCategories: [Category],
    aCategory(name: String!): Category
  }
`;
