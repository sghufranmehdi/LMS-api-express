let sequelize = require("../../common/dbConnection");
let user = require("./users/user");
let student = require("./users/student");
let teacher = require("./users/teacher");
let course = require("./users/course");

user.hasOne(student, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
}); // user has one student

student.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true }, //foreign key
});

user.hasOne(teacher, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});

teacher.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});

course.belongsToMany(teacher, {
  through: "TeacherTeaching",
  as: "Teacher",
  onDelete: "CASCADE",
  foreignKey: { name: "cID", allowNull: false },
});

teacher.belongsToMany(course, {
  through: "TeacherTeaching",
  as: "Course",
  onDelete: "CASCADE",
  foreignKey: { name: "tID", allowNull: false },
});

const models = sequelize.models;
console.log(models);
const db = {};
db.sequelize = sequelize;
module.exports = { db, models };
