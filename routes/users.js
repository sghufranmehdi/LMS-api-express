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

router.get("/getUsers", userController.getUsers);
router.post("/createUsers", userController.createUsers);
router.put("/updateUsers", userController.updateUsers);
router.delete("/deleteUsers", userController.deleteUsers);

module.exports = router;
