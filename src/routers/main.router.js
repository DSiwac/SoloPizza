const { Router } = require("express");
const mainPage = require("../views/Main");
const { Pizza } = require("../../db/models");
const renderTemplate = require("../lib/renderTemplate");

const mainRouter = new Router();

mainRouter.get("/", async (req, res) => {
  try {
    const pizzas = await Pizza.findAll({ raw: true });
    const { login } = req.session;
    console.log(pizzas);

    renderTemplate(mainPage, { login, pizzas }, res);
  } catch (error) {
    console.error("Ошибка при получении списка пицц: ", error);
    res.sendStatus(500);
  }
});

mainRouter.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("soloPizza");
    res.redirect("/");
  });
});

module.exports = mainRouter;
