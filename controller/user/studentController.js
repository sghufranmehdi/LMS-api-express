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
};
