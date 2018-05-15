export default `
  type Profile {
    name: String,
    gender: String,
    location: String,
    website: String,
    picture: String,
  }

  type User {
    email: String,
    password: String,
    profile: Profile,
    createdAt: String,
    updatedAt: String,
  }

  type Query {
    allUsers: [User]
    aUser(id: ID!): User
  }
`;
