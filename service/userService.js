const { models } = require("../models/definations");
module.exports = {
  getUsers: async () => {
    const result = await models.user.findAll();
    return result;
  },
  createUsers: async (data) => {
    console.log(data);
    const result = await models.user.create(data);
    console.log(result);
    return result;
  },
  updateUsers: async (data) => {
    console.log(data);
    const result = await models.user.update(data);
    console.log(result);
    return result;
  },

  deleteUsers: async (data) => {
    console.log(data);
    const result = await models.user.drop(data);
    console.log(result);
    return result;
  },
};
