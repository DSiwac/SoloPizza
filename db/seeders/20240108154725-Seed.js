'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert("Pizzas", [
    {
      name: "Мексиканская",
      comp: "Томатный соус, цыплёнок, свежие шампиньоны, свежий болгарский перец, маринованный красный лук, свежие томаты, жгучие мексиканские перчики Халапеньо, сыр Моцарелла.",
      price: "700 р.",
      picture:
        "https://papitospizza.ru/wa-data/public/shop/products/27/00/27/images/272/272.970.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Пепперони",
      price: "560 р.",
      comp: "Состав: моцарелла, сальсичча, соус для пиццы, табаско, оливковое масло на травах",
      picture:
        "https://papitospizza.ru/wa-data/public/shop/products/41/00/41/images/268/268.970.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Прошутто ди Парма",
      comp: "Состав: свиной окорок, моцарелла, соус бальзамико, сливочный соус",
      price: "600 р.",
      picture:
        "https://papitospizza.ru/wa-data/public/shop/products/20/00/20/images/303/303.970.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Квадро формаджи",
      comp: "Состав: моцарелла, гауда, дор блю, пармезан, сливочный соус",
      price: "580 р.",
      picture:
        "https://papitospizza.ru/wa-data/public/shop/products/35/00/35/images/273/273.970.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
 await queryInterface.bulkDelete("Clients", null, {});
 await queryInterface.bulkDelete("Baskets", null, {});
 await queryInterface.bulkDelete("Histories", null, {});
 await queryInterface.bulkDelete("Pizzas", null, {});
  }
};
