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
      name: DataTypes.STRING,
      department: DataTypes.STRING,
      email: DataTypes.STRING,
      location: DataTypes.STRING,
      number: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "colleges",
    }
  );
  return colleges;
};
