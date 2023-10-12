const { models } = require("../models/definations");
module.exports = {
  getStudent: async () => {
    const result = await models.student.findAll();
    return result;
  },
  createStudent: async (data) => {
    console.log(data);
    const result = await models.student.create(data);
    console.log(result);
    return result;
  },
  updateStudent: async (data) => {
    console.log(data);
    const result = await models.student.update(data);
    console.log(result);
    return result;
  },

  deleteStudent: async (data) => {
    console.log(data);
    const result = await models.student.drop(data);
    console.log(result);
    return result;
  },
};
