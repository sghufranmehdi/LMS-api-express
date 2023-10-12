const { EagerLoadingError } = require("sequelize");
const { models } = require("../models/definations");
module.exports = {
  getUsers: (data) => {
    return data;
  },
  createUsers: async (data) => {
    console.log(data);
    const result = await models.user.create(data);
    console.log(result);
    return result;
  },
};
