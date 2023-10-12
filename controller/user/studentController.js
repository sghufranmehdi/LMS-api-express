const student = require("../../models/definations/users/student");

module.exports = {
  createUsers: async (req, res) => {
    const { firstname, lastname, email, phoneNumer } = req.body;
    const { rollNo, dept, semester, gpa } = req.body;
    const user = await userController.createUsers(
      firstname,
      lastname,
      email,
      phoneNumer
    );
    //sending key:value pair
    const data = await studentController.createStudent({
      rollNo: rollNo,
      dept: dept,
      semester: semester,
      gpa: gpa,
      userID: user.id,
    });
    res.send(data);
  },

  getUsers: async (req, res) => {
    const { firstname, lastname, email, phoneNumer } = req.body;
    const { rollNo, dept, semester, gpa } = req.body;
    const user = await userController.getUsers(
      firstname,
      lastname,
      email,
      phoneNumer
    );
    //sending key:value pair
    const data = await studentController.getStudent({
      rollNo: rollNo,
      dept: dept,
      semester: semester,
      gpa: gpa,
      userID: user.id,
    });
    res.send(data);
  },
  updateUsers: async (req, res) => {
    const { firstname, lastname, email, phoneNumer } = req.body;
    const { rollNo, dept, semester, gpa } = req.body;
    const user = await userController.updateUsers(
      firstname,
      lastname,
      email,
      phoneNumer
    );
    //sending key:value pair
    const data = await studentController.updateStudent({
      rollNo: rollNo,
      dept: dept,
      semester: semester,
      gpa: gpa,
      userID: user.id,
    });
    res.send(data);
  },
  deleteUsers: async (req, res) => {
    const { firstname, lastname, email, phoneNumer } = req.body;
    const { rollNo, dept, semester, gpa } = req.body;
    const user = await userController.deleteUsers(
      firstname,
      lastname,
      email,
      phoneNumer
    );
    //sending key:value pair
    const data = await studentController.deleteStudent({
      rollNo: rollNo,
      dept: dept,
      semester: semester,
      gpa: gpa,
      userID: user.id,
    });
    res.send(data);
  },
};
