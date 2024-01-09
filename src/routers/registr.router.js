const { Router } = require("express");
const { Client } = require("../../db/models");
const bcrypt = require("bcrypt");

const renderTemplate = require("../lib/renderTemplate");
const Registr = require("../views/Registr");
const { where } = require("sequelize");
const Error = require("../views/Error")

const registerRouter = new Router();

registerRouter.get("/", (req, res) => {
  renderTemplate(Registr, null, res);
});

registerRouter.post("/", async (req, res) => {
  const { fullName, mail, phone, password, discount, age } = req.body;
  try {
    const client = await Client.findOne({ where: { fullName } });
    if(client){
      res.json({err: "Имя уже используется"})
    }else{
      const hash = await bcrypt.hash(password, 10)
      const newClient = await Client.create({
        fullName,
        mail,
        phone,
        password: hash,
        discount,
        age,
      });
      req.session.login = newClient.fullName;
      req.session.save(()=>{
        res.json({msg: "Успешно!"})
      })
    }
  } catch (error) {
    console.log(error);
    renderTemplate(Error, { error }, res);
  }
});

module.exports = registerRouter;
