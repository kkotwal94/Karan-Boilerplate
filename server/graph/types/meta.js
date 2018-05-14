export default `
  type Meta {
    title: String,
    description: String,
    keywords: [String],
  }

  type Query {
    allMeta: [Meta],
    aMeta(title: String!): Meta,
  }
`;
