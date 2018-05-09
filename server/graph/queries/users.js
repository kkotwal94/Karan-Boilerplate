import { GraphQLObjectType, GraphQLList } from 'graphql';
import { User, Profile } from '../types/users';
import UsersModel from '../../db/models/user';

const usersQuery = new GraphQLObjectType({
  name: 'allUsers',
  fields: () => ({
    users: {
      type: new GraphQLList(User),
      resolve: () => {
        const users = UsersModel.find().exec();
        if (!users) {
          throw new Error('Error');
        }
        return users;
      },
    },
  }),
});

export default {
  usersQuery,
};
