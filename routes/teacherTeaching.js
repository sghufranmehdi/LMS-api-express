var express = require("express");
var router = express.Router();
const {
  userController,
  studentController,
  teacherController,
  courseController,
} = require("../controller/index"); //use .. to go back
const tcController = require("../controller/user/tcController");
const authenticationController = require("../controller/common/authenticationController");

/* GET users listing. */
router.post("/course_teacher", tcController.createTc);
router.get(
  "/teacher/:teacherID/courses",
  tcController.getCoursesTaughtByTeacher
);
router.get("/course/:courseID/teachers", tcController.getTeachersOfCourse);

router.post("/login", authenticationController.login);
router.get(
  "/",
  authenticationController.AuthenticateToken,
  userController.getUsers
);

module.exports = router;
