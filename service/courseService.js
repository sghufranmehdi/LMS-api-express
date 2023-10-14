const { models } = require("../models/definations");
module.exports = {
  getCourse: async () => {
    const result = await models.course.findAll();
    return result;
  },
  createCourse: async (data) => {
    console.log(data);
    const result = await models.course.create(data);
    console.log(result);
    return result;
  },
  updateCourse: async (data) => {
    console.log(data);
    const result = await models.course.update(data);
    console.log(result);
    return result;
  },

  deleteCourse: async (data) => {
    console.log(data);
    const result = await models.course.drop(data);
    console.log(result);
    return result;
  },
};
