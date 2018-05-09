import { GraphQLObjectType, GraphQLList } from 'graphql';
import types from '../types';
import UsersModel from '../../db/models/user';

const { User, Profile } = types;

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

export default usersQuery;
