"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    static associate(models) {
      // define association here
    }
  }
  students.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      studentNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "students",
    }
  );
  return students;
};
