const { colleges, courses, students } = require("../db/models");
exports.fetchCollege = async (id, next) => {
  try {
    const foundCollege = await colleges.findByPk(id);
    return foundCollege;
  } catch (error) {
    next(error);
  }
};

exports.publicData = async (_, res, next) => {
  try {
    const colleges = await colleges.findAll();
    res.json(colleges);
  } catch (error) {
    next(error);
  }
};
