const { Router } = require("express");
const { Client } = require("../../db/models");
const bcrypt = require("bcrypt");

const renderTemplate = require("../lib/renderTemplate");
const Redact = require("../views/Cabinet");
const { where } = require("sequelize");
const Error = require("../views/Error");

const redactingRouter = new Router();

redactingRouter.get("/", (req, res) => {
    const { login } = req.session;
  renderTemplate(Redact, { login }, res);
});

redactingRouter.put("/cabinet/:id", async (req, res) => {
  const { fullName, mail, phone, password, discount, age } = req.body;
  const { login } = req.session;
  const { id } = req.params;
  try {
    const client = await Client.findByPk();
    if (client) {
      const updatedData = {
        fullName,
        mail,
        phone,
        discount,
        age,
      };
      if (password) {
        updatedData.password = await bcrypt.hash(password, 10);
      }
      await client.update(updatedData);
      req.session.login = client.fullName;
      req.session.save(() => {
        res.json({ msg: "Данные обновлены успешно!" });
      });
    } else {
      res.status(404).json({ err: "Клиент не найден" });
    }
  } catch (error) {
    console.log(error);
    renderTemplate(Error, { error }, res);
  }
});

module.exports = redactingRouter;