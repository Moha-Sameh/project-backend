const { students, colleges } = require("../db/models");

//function to fetch students by Primary Key "ID"
exports.fetchStudent = async (id, next) => {
  try {
    const foundStudent = await students.findByPk(id);
    return foundStudent;
  } catch (error) {
    next(error);
  }
};

//publicData function used to get all the data within the students table
exports.publicData = async (_, res, next) => {
  try {
    const student = await students.findAll({
      attributes: ["id", "firstName", "lastName"],
      include: {
        model: colleges,
        as: "college",
        attributes: { exclude: ["createdAt", "updatedAt", "collegeEmail"] },
      },
    });
    res.json(student);
  } catch (error) {
    next(error);
  }
};

//Middleware for finding college
exports.findCollege = async (req, res, next) => {
  try {
    const college = await colleges.findOne({
      where: {
        name: req.body.college,
      },
    });
    req.college = college;
    next();
  } catch (error) {
    next(error);
  }
};
//createData function used to add data into students table
exports.createData = async (req, res, next) => {
  try {
    req.body.collegeID = req.college.id;
    const newStudent = await students.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    next(error);
  }
};

//deleteData function used to drop data from students table by "ID"
exports.deleteData = async (req, res, next) => {
  try {
    await req.student.destroy();
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

//updateData function used to modify the data in students table by "ID"
exports.updateData = async (req, res, next) => {
  try {
    await req.student.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};
