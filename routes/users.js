var express = require("express");
var router = express.Router();
const { userController } = require("../controller/index"); //use .. to go back

/* GET users listing. */

router.get("/getUsers", userController.getUsers);
router.post("/createUsers", userController.createUsers);

module.exports = router;
