const { Router } = require("express");
const Cabinet = require("../views/Cabinet");

const { History, Client } = require("../../db/models");
const ErrorView = require("../views/Error");

const renderTemplate = require("../lib/renderTemplate");

const historyRouter = new Router();

historyRouter.get("/", async (req, res) => {
  const { login } = req.session;
  console.log(login);

  try {
    const client = await Client.findOne({ where: { username: login }, raw: true });

    const historyData = await History.findAll();
    console.log(historyData);

    renderTemplate(Cabinet, { historyData, login }, res);
  } catch (error) {
    renderTemplate(ErrorPage, { error }, res);
    console.log("Ошибка");
  }
});

module.exports = historyRouter;
