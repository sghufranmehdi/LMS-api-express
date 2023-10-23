var express = require("express");
var router = express.Router();
const { teacherController } = require("../controller/index"); //use .. to go back

/* GET users listing. */
router.get("/getTeacher", teacherController.getTeacher);
router.post("/createTeacher", teacherController.createTeacher);
router.put("/updateTeacher/:id", teacherController.updateTeacher);
router.delete("/deleteTeacher/:id", teacherController.deleteTeacher);

module.exports = router;
