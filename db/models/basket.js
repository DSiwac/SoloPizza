"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate(models) {
      this.belongsTo(models.Client, { foreignKey: "ClientId" });
      this.belongsTo(models.Pizza, { foreignKey: "pizzaID" });
    }
  }
  Basket.init(
    {
      ClientId: DataTypes.INTEGER,
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
