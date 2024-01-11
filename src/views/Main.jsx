const React = require("react");
const Layout = require("./Layout");

module.exports = function MainPage({ login, pizzas }) {
  return (
    <Layout login={login}>
      <form action="/" method="GET" id="mainForm">
        <div className="cardDiv">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="card" style={{ width: "18rem" }}>
              <img
                src={pizza.picture}
                className="card-img-top"
                alt={`Изображение ${pizza.name}`}
              />

              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">{pizza.comp}</p>
                <p className="card-text">{pizza.price}</p>
                <a
                  href={`/basket/${pizza.id}`}
                  type="submit"
                  className="btn btn-primary"
                  id={pizza.id}
                >
                  В корзину
                </a>
                <div class="s-pricing-wrapper">
                  <span class="s-price price"></span>
                </div>
                <div className="s-quantity-wrapper">
                  <input
                    className="minus-button decrease-volume"
                    type="button"
                    value="−"
                  />
                  <input
                    className="product-quantity-field"
                    type="text"
                    name="quantity"
                    value="1"
                    data-max-quantity="10"
                  />
                  <input
                    className="plus-button increase-volume"
                    type="button"
                    value="+"
                  />
                </div>
              </div>
            </div>
          ))}
          <div id="map" className="map"></div>
          <script src="https://api-maps.yandex.ru/2.1/?apikey=6f2f6c61-b308-4695-a4c2-c977f7f6967f&lang=ru_RU"></script>
          <script src="map.js"></script>
        </div>
      </form>
    </Layout>
  );
};
