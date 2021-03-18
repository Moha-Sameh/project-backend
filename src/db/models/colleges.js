"use strict";
const { Model } = require("sequelize");
const SequelizeSlugify = require("sequelize-slugify");

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
  SequelizeSlugify.slugifyModel(colleges, {
    source: ["collegeName"],
  });
  return colleges;
};
