const teacherService = require("../../service/teacherService");
const userController = require("./userController");
module.exports = {
  createTeacher: async (req, res) => {
    const { firstName, lastName, email, phoneNumber } = req.body;
    const { education, subject, dept } = req.body;
    const user = await userController.createUsersHelper({
      firstName,
      lastName,
      email,
      phoneNumber,
    });
    //sending key:value pair
    const data = await teacherService.createTeacher({
      education: education,
      subject: subject,
      dept: dept,
      userID: user.id,
    });
    res.send(data);
  },

  getTeacher: async (req, res) => {
    const data = await teacherService.getTeacher();
    res.send(data);
  },
  updateTeacher: async (req, res) => {
    const data = await teacherService.updateTeacher(req.params.id, req.body);
    res.send(data);
  },
  deleteTeacher: async (req, res) => {
    const data = await teacherService.deleteTeacher(req.params.id);
    res.send(data);
  },
};
