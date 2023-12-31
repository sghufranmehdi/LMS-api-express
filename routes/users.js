var express = require("express");
var router = express.Router();
const {
  userController,
  studentController,
  teacherController,
  courseController,
} = require("../controller/index"); //use .. to go back
const tcController = require("../controller/user/tcController");

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
router.delete("/deleteTeacher/:id", teacherController.deleteTeacher);

router.get("/getCourse", courseController.getCourse);
router.post("/createCourse", courseController.createCourse);
router.put("/updateCourse/:id", courseController.updateCourse);
router.delete("/deleteCourse/:id", courseController.deleteCourse);

router.post("/course_teacher", tcController.createTc);
router.get(
  "/teacher/:teacherID/courses",
  tcController.getCoursesTaughtByTeacher
);
router.get("/course/:courseID/teachers", tcController.getTeachersOfCourse);

module.exports = router;
