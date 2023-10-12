var express = require("express");
var router = express.Router();
const { userController } = require("../controller/index"); //use .. to go back
const { studentController } = require("../controller/user/studentController");

/* GET users listing. */

router.get("/getUsers", userController.getUsers);
router.post("/createUsers", userController.createUsers);
router.put("/updateUsers", userController.updateUsers);
router.delete("/deleteUsers", userController.deleteusers);

router.get("/getStudent", studentController.getUsers);
router.post("/createStudent", studentController.createUsers);
router.put("/updateStudent", studentController.updateUsers);
router.delete("/deleteStudent", studentController.deleteusers);

module.exports = router;
