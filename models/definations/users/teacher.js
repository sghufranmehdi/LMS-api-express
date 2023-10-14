const sequelize = require("../../../common/dbConnection");
const teacher = sequelize.define(
  "teacher",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    education: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subject: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    dept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "teacher",
  }
);

module.exports = teacher;
