"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.colleges.hasMany(db.students, {
  foreignKey: {
    name: "collegeID",
    as: "student",
    allowNull: false,
  },
});

db.students.belongsTo(db.colleges, {
  foreignKey: {
    name: "collegeID",
    as: "college",
    allowNull: false,
  },
});

db.students.belongsToMany(db.courses, {
  through: "studentCourses",
  as: "courses",
  foreignKey: "studentId",
});
db.courses.belongsToMany(db.students, {
  through: "studentCourses",
  as: "students",
  foreignKey: "courseId",
});

db.colleges.hasMany(db.courses, {
  foreignKey: {
    name: "collegeID",
    as: "course",
    allowNull: false,
  },
});

db.courses.belongsTo(db.colleges, {
  foreignKey: {
    name: "collegeID",
    as: "college",
    allowNull: false,
  },
});

module.exports = db;
