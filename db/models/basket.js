"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    
    static associate(models) {
    
    }
  }
  Basket.init(
    {
      clientID: DataTypes.INTEGER,
      pizzaID: DataTypes.INTEGER,
      order: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Basket",
    }
  );
  return Basket;
};
