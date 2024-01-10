const React = require("react");
const Layout = require("./Layout");

module.exports = function Basket({ login, basketEntries }) {
  return (
    <Layout login={login}>
      <script defer src="/client/delet.js"></script>
      <form method="POST" action="/bascet" id="basketForm">
        {basketEntries &&
          basketEntries.map((entry) => (
            <div
              className="card mb-3"
              style={{ maxWidth: "540px" }}
              key={entry.pizzaID}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={entry.Pizza.picture}
                    className="img-fluid rounded-start"
                    alt={`Pizza ${entry.Pizza.name}`}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{entry.Pizza.name}</h5>
                    <p className="card-text">{entry.Pizza.comp}</p>
                    
                    <form
                      method="POST"
                      action={`/basket/delete/${entry.pizzaID}`}
                    >
                      <button type="submit" className="btn btn-danger">
                        Удалить
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </form>
    </Layout>
  );
};
