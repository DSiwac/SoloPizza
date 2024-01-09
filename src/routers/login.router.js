const { Router } = require("express");
const { Client } = require("../../db/models");
const bcrypt = require("bcrypt");

const renderTemplate = require("../lib/renderTemplate");

const LoginRouter = require("../views/Login");

const loginRouter = new Router();

loginRouter.get("/", (req, res) => {
  renderTemplate(LoginRouter, null, res);
});

loginRouter.post("/", async (req, res) => {
  const { login, password } = req.body;
  try {
    const client = await Client.findOne({ where: { fullName: login } });
    if (client) {
      const checkPass = await bcrypt.compare(password, client.password);
      if (checkPass) {
        req.session.login = client.fullName;
        req.session.save(() => {
          res.json({ msg: "Вы успешно авторизованы!" });
        });
      } else {
        res.json({ err: "Неверный пароль" });
      }
    } else {
      res.json({ err: "Такой пользователь не найден!" });
    }
  } catch (error) {
    console.log("Ошибка", error);
    res.json({ err: "Ошибка сервера" }); 
  }
});

module.exports = loginRouter;
