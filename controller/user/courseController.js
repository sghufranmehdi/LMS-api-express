const courseService = require("../../service/courseService");
const userController = require("./userController");
module.exports = {
  createCourse: async (req, res) => {
    const { firstName, lastName, email, phoneNumber } = req.body;
    const { id, name, creditHr } = req.body;
    const user = await userController.createUsersHelper({
      firstName,
      lastName,
      email,
      phoneNumber,
    });
    //sending key:value pair
    const data = await courseService.createCourse({
      id: id,
      name: name,
      creditHr: creditHr,
      userID: user.id,
    });
    res.send(data);
  },

  getCourse: async (req, res) => {
    const data = await courseService.getCourse();
    res.send(data);
  },
  updateCourse: async (req, res) => {
    const data = await courseService.updateCourse(req.params.id, req.body);
    res.send(data);
  },
  deleteCourse: async (req, res) => {
    const data = await courseService.deleteCourse(req.params.id);
    res.send(data);
  },
};
