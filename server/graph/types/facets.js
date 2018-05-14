export default `
  type Facet {
    name: String,
    value: String,
    count: Int,
  }

  type Query {
    allFacets: [Facet],
    aFacet(name: String!): Facet,
  }
`;
