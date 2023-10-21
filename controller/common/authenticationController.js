const jwt = require("jsonwebtoken");
const { token } = require("morgan");
const { models } = require("../../models/definations");
const config = require("../../config");
const bcrypt = require("bcrypt");
let tokens = [];
function generateAccessToken(user) {
  return jwt.sign(user, config.jwt);
}
module.exports = {
  AuthenticateToken: async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    console.log(authHeader);

    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      return res.sendStatus(401);
    }
    jwt.verify(token, config.jwt, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    let user = await models.user.findOne({
      where: { email: email },
    });
    user = user?.dataValues;
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateAccessToken(user);
      tokens.push(token);
      res.json({ token: token });
    } else {
      res.send("user dont exist");
    }
  },
};
