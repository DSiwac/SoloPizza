const { sequelize } = require("../../db/models");

function getTime(req, res, next) {
  console.log(new Date());
  next();
}

async function checkDB(req, res, next) {
  try {
    await sequelize.authenticate();
    console.log("БД подключена!");
    next();
  } catch (error) {
    console.log("Не подключена!!", error);
    res.send("БД не подключена!!!", error);
  }
}

module.exports = { getTime, checkDB };
