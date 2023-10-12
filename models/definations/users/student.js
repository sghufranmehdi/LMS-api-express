// id
// rollno
// dept
// semester
// gpa

const { DataTypes } = require("sequelize");
let sequelize = require("../../../common/dbConnection");
const student = sequelize.define(
  "student",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    rollNo: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    dept: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    semester: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gpa: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "student",
  }
);

module.exports = student;
