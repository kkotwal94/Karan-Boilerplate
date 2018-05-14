export default `
  type Meta {
    title: String,
    description: String,
    keywords: [String],
    createdAt: String,
    updatedAt: String,
  }

  type Query {
    allMeta: [Meta],
    aMeta(title: String!): Meta,
  }
`;
