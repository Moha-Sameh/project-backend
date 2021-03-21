"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class colleges extends Model {
    static associate(models) {
      // define association here
    }
  }
  colleges.init(
    {
      collegeName: DataTypes.STRING,
      collegeSection: DataTypes.STRING,
      collegeEmail: DataTypes.STRING,
      collegeLocation: DataTypes.STRING,
      collegeNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "colleges",
    }
  );
  return colleges;
};
