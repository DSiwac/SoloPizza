"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pizza extends Model {
    static associate(models) {
      this.belongsToMany(models.Client, {
        through: models.Basket,
        foreignKey: "pizzaID", 
      });

      this.belongsToMany(models.Client, {
        through: models.History,
        foreignKey: "pizzaID", 
      });
    }
  }
  Pizza.init(
    {
      name: DataTypes.STRING,
      comp: DataTypes.STRING,
      price: DataTypes.STRING,
      picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pizza",
    }
  );
  return Pizza;
};
