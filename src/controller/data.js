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
    const college = await colleges.findAll();
    res.json(college);
  } catch (error) {
    next(error);
  }
};
