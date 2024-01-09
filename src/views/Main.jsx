const React = require("react");
const Layout = require("./Layout");

module.exports = function MainPage({ login, pizzas }) {
  return (
    <Layout login={login}>
      <form action="/" method="GET" className="mainForm">
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
                <a href="/basket" className="btn btn-primary">
                  В корзину
                </a>
                <div class="s-pricing-wrapper">
                  
                  <span class="s-price price">449 р</span>
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
        </div>
      </form>
    </Layout>
  );
};
