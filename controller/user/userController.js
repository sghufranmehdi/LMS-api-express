const userService = require("../../service/userService");

module.exports = {
  getUsers: async (req, res) => {
    const data = await userService.getUsers();
    res.send(data);
  },
  createUsers: async (req, res) => {
    const data = await userService.createUsers(req.body);
    res.send(data);
  },
  createUsersHelper: async (data) => {
    console.log(data);
    const result = await userService.createUsers(data);
    return result;
  },
  updateUsers: async (req, res) => {
    const data = await userService.updateUsers(req.params.id, req.body);
    res.send(data);
  },

  deleteUsers: async (req, res) => {
    const data = await userService.deleteUsers(req.params.id);
    res.send(data);
  },
};
