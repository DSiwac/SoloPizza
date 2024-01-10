"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      this.belongsToMany(models.Pizza, {
        through: models.Basket,
        foreignKey: "ClientId", 
      });

      this.belongsToMany(models.Pizza, {
        through: models.History,
        foreignKey: "ClientId", 
      });
    }
  }
  Client.init(
    {
      fullName: DataTypes.STRING,
      mail: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      discount: DataTypes.INTEGER,
      age: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Client",
    }
  );
  return Client;
};
