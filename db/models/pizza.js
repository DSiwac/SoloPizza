"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pizza extends Model {
   
    static associate(models) {
     this.belongsToMany(models.Client, {
       through: models.Basket,
       foreignKey: "clientID",
     });

     this.belongsToMany(models.Client, {
       through: models.History,
       foreignKey: "clientID",
     });
    }
  }
  Pizza.init(
    {
      name: DataTypes.STRING,
      comp: DataTypes.STRING,
      picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pizza",
    }
  );
  return Pizza;
};
