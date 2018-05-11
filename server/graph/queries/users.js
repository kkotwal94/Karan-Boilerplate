import UsersModel from '../../db/models/user';

export default {
  Query: {
    allUsers: async () => {
      const users = await UsersModel.find();
      console.log(users);
      return users;
    },
    aUser: async email => {
      const user = await UsersModel.find({ email });
      console.log(user);
      return aUser;
    },
  },
};
