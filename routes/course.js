var express = require("express");
var router = express.Router();
const { courseController } = require("../controller/index"); //use .. to go back

/* GET users listing. */
router.get("/getCourse", courseController.getCourse);
router.post("/createCourse", courseController.createCourse);
router.put("/updateCourse/:id", courseController.updateCourse);
router.delete("/deleteCourse/:id", courseController.deleteCourse);
module.exports = router;
