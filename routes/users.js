var express = require("express");
var router = express.Router();
const { userController, studentController } = require("../controller/index"); //use .. to go back

/* GET users listing. */

router.get("/getUsers", userController.getUsers);
router.post("/createUsers", userController.createUsers);
router.put("/updateUsers", userController.updateUsers);
router.delete("/deleteUsers", userController.deleteUsers);

router.get("/getStudent", studentController.getStudent);
router.post("/createStudent", studentController.createStudent);
router.put("/updateStudent/:id", studentController.updateStudent);
router.delete("/deleteStudent/:id", studentController.deleteStudent);

router.get("/getTeacher", teacherController.getTeacher);
router.post("/createTeacher", teacherController.createTeacher);
router.put("/updateTeacher/:id", teacherController.updateTeacher);
router.delete("/deleteTeacher/:id", teacherController.deleteTeachert);

module.exports = router;
