const { courses } = require("../db/models");

//function to fetch Courses by Primary Key "ID"
exports.fetchcourse = async (id, next) => {
  try {
    const foundCourse = await courses.findByPk(id);
    return foundCourse;
  } catch (error) {
    next(error);
  }
};

//publicData function used to get all the data within the Courses table
exports.publicData = async (_, res, next) => {
  try {
    const course = await courses.findAll();
    res.json(course);
  } catch (error) {
    next(error);
  }
};

//createData function used to add data into Courses table
exports.createData = async (req, res, next) => {
  try {
    req.body.collegeID = req.college.id;
    const newCourse = await courses.create(req.body);
    res.status(201).json(newCourse);
  } catch (error) {
    next(error);
  }
};

//deleteData function used to drop data from Courses table by "ID"
exports.deleteData = async (req, res, next) => {
  try {
    await req.course.destroy();
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

//updateData function used to modify the data in Courses table by "ID"
exports.updateData = async (req, res, next) => {
  try {
    await req.course.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};
