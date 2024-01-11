const { Router } = require("express");
const { Basket, Client, Pizza } = require("../../db/models");
const renderTemplate = require("../lib/renderTemplate");
const BasketView = require("../views/Basket");
const ErrorView = require("../views/Error");
const basketRouter = new Router();

basketRouter.get("/", async (req, res) => {
  const { login } = req.session;
  try {
    const client = await Client.findOne({ where: { fullName: login } });
    const basketEntries = await Basket.findAll({
      where: { ClientId: client.id },
      include: [Pizza],
    });
    console.log(basketEntries);
    renderTemplate(BasketView, { login, basketEntries }, res);
  } catch (error) {
    console.error("Ошибка", error);
    renderTemplate(ErrorView, { error: error.message }, res);
  }
});

basketRouter.get("/:id", async (req, res) => {
  const { login } = req.session;
  const { id } = req.params;
  try {
    const client = await Client.findOne({ where: { fullName: login } });
    await Basket.create({
      ClientId: client.id,
      pizzaID: id,
    });

    res.redirect("/");
  } catch (error) {
    console.error("Ошибка", error);
    renderTemplate(ErrorView, { error: error.message }, res);
  }
});
basketRouter.delete("/:pizzaID", async (req, res) => {
  const { login } = req.session;
  const { pizzaID } = req.params; 
  try {
    const client = await Client.findOne({ where: { fullName: login } });
    if (client) {
      
      await Basket.destroy({
        where: {
          ClientId: client.id,
          pizzaID: pizzaID,
        },
      });
      res.json({msg: "well"}) 
    } else {
      res.status(404).send("Клиент не найден");
    }
  } catch (error) {
    console.error("Ошибка удаления из корзины:", error);
    renderTemplate(ErrorView, { error: error.message }, res);
  }
});

module.exports = basketRouter;
