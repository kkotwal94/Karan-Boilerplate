import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } from 'graphql';

const Profile = new GraphQLObjectType({
  name: 'Profile',
  description: 'User Profile',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'Graphql',
    },
    gender: {
      type: GraphQLString,
      description: 'Graphql',
    },
    location: {
      type: GraphQLString,
      description: 'Graphql',
    },
    website: {
      type: GraphQLString,
      description: 'Graphql',
    },
    picture: {
      type: GraphQLString,
      description: 'Graphql',
    },
  }),
});

const User = new GraphQLObjectType({
  name: 'user',
  description: 'Gets our User',
  fields: () => ({
    email: {
      type: GraphQLString,
      description: 'Email for user',
    },
    profile: {
      type: new GraphQLObjectType(Profile),
      description: 'Profile for user',
    },
    password: {
      type: GraphQLString,
      description: 'Password for a user',
    },
  }),
});

export default {
  User,
  Profile,
};
