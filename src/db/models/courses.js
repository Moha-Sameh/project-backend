"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    static associate(models) {
      // define association here
    }
  }
  courses.init(
    {
      courseName: DataTypes.STRING,
      courseCredit: DataTypes.STRING,
      courseNumber: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "courses",
    }
  );
  return courses;
};
