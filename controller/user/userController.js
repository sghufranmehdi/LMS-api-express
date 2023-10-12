const userService = require("../../service/userService");

module.exports = {
  getUsers: (req, res) => {
    const data = userService.getUsers("GET ALL USER");
    res.send(data);
  },
  createUsers: async (req, res) => {
    const data = await userService.createUsers(req.body);

    res.send(data);
  },
};
