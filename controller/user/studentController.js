const studentService = require("../../service/studentService");
const userController = require("./userController");
module.exports = {
  createStudent: async (req, res) => {
    const { firstName, lastName, email, phoneNumber } = req.body;
    const { rollNo, dept, semester, gpa } = req.body;
    const user = await userController.createUsersHelper({
      firstName,
      lastName,
      email,
      phoneNumber,
    });
    //sending key:value pair
    const data = await studentService.createStudent({
      rollNo: rollNo,
      dept: dept,
      semester: semester,
      gpa: gpa,
      userID: user.id,
    });
    res.send(data);
  },

  getStudent: async (req, res) => {
    const data = await studentService.getStudent();
    res.send(data);
  },
  updateStudent: async (req, res) => {
    const data = await studentService.updateStudent(req.params.id, req.body);
    res.send(data);
  },
  deleteStudent: async (req, res) => {
    const data = await studentService.deleteStudent(req.params.id);
    res.send(data);
  },
};
