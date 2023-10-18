const { models } = require("../models/definations/");
module.exports = {
  createTc: async (data) => {
    const result = await models.TeacherTeaching.create({
      tID: data.tID,
      cID: data.cID,
    });
    return result;
  },

  getCoursesTaughtByTeacher: async (data) => {
    console.log(data);
    const result = await models.teacher.findOne({
      where: { id: data.tID },
      include: { model: models.course, as: "Course" },
    });
    return result.toJSON();
  },
  getTeachersOfCourse: async (data) => {
    const result = await models.course.findOne({
      where: { id: data.cID },
      include: {
        model: models.teacher,
        as: "Teacher",
        include: models.user,
        attributes: ["id", "education"], // to get specific colums
        through: { attributes: [] },
      },
    });
    return result;
  },

  //
  getTc: async (data) => {},

  updateTc: async (data) => {},

  deleteTc: async (data) => {},
};
