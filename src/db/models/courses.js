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
      name: DataTypes.STRING,
      credit: DataTypes.STRING,
      number: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "courses",
    }
  );
  return courses;
};
