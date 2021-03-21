const { colleges } = require("../db/models");

//function to fetch colleges by Primary Key "ID"
exports.fetchCollege = async (id, next) => {
  try {
    const foundCollege = await colleges.findByPk(id);
    return foundCollege;
  } catch (error) {
    next(error);
  }
};

//publicData function used to get all the data within the college table
exports.publicData = async (_, res, next) => {
  try {
    const college = await colleges.findAll();
    res.json(college);
  } catch (error) {
    next(error);
  }
};

//createData function used to add data into college table
exports.createData = async (req, res, next) => {
  try {
    const newCollege = await colleges.create(req.body);
    res.status(201).json(newCollege);
  } catch (error) {
    next(error);
  }
};

//deleteData function used to drop data from college table by "ID"
exports.deleteData = async (req, res, next) => {
  try {
    await req.college.destroy();
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

//updateData function used to modify the data in college table by "ID"
exports.updateData = async (req, res, next) => {
  try {
    await req.college.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};
