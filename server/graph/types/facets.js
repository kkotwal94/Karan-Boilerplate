export default `
  type Facet {
    name: String,
    value: String,
    count: Int,
    createdAt: String,
    updatedAt: String,
  }

  type Query {
    allFacets: [Facet],
    aFacet(name: String!): Facet,
  }
`;
