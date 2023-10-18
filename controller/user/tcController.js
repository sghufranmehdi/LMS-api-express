const tcService = require("../../service/tcService");

module.exports = {
  createTc: async (req, res) => {
    const data = await tcService.createTc(req.body);
    res.send(data);
  },

  getCoursesTaughtByTeacher: async (req, res) => {
    const data = await tcService.getCoursesTaughtByTeacher(req.body);
    res.send(data);
  },

  getTeachersOfCourse: async (req, res) => {
    const data = await tcService.getTeachersOfCourse(req.body);
    res.send(data);
  },
  getTc: async (req, res) => {
    const data = await tcService.getTc();
    res.send(data);
  },

  updateTc: async (req, res) => {
    const data = await tcService.updateTc(req.params.id, req.body);
    res.send(data);
  },

  deleteTc: async (req, res) => {
    const data = await tcService.deleteTc(req.params.id);
    res.send(data);
  },
};
