/* eslint-disable import/newline-after-import */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    
    static associate(models) {
      
    }
  }
  History.init(
    {
      ClientId: DataTypes.INTEGER,
      pizzaID: DataTypes.INTEGER,
      order: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "History",
    }
  );
  return History;
};
