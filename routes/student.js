var express = require("express");
var router = express.Router();
const { studentController } = require("../controller/index"); //use .. to go back

/* GET users listing. */
router.get("/getStudent", studentController.getStudent);
router.post("/createStudent", studentController.createStudent);
router.put("/updateStudent/:id", studentController.updateStudent);
router.delete("/deleteStudent/:id", studentController.deleteStudent);

module.exports = router;
