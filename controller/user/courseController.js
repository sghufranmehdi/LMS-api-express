const courseService = require("../../service/courseService");

module.exports = {
  createCourse: async (req, res) => {
    //sending key:value pair
    const data = await courseService.createCourse({
      id: id,
      name: name,
      creditHr: creditHr,
      ID: id,
    });
    res.send(data);
  },

  getCourse: async (req, res) => {
    const data = await courseService.getCourse();
    res.send(data);
  },
  updateCourse: async (req, res) => {
    const data = await courseService.updateCourse(req.params.id, req.body);
    res.send(data);
  },
  deleteCourse: async (req, res) => {
    const data = await courseService.deleteCourse(req.params.id);
    res.send(data);
  },
};