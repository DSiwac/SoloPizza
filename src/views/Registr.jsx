const React = require("react");
const Layout = require("./Layout");

module.exports = function RegForm() {
  return (
    <Layout>
      <script defer src="client/registr.js"></script>
      <form method="POST" action="/registr" id="regForm">
        <div className="mb-3">
          <label htmlFor="exampleInputUsername1" className="form-label">
            Введите ваше имя
          </label>
          <input
            placeholder="Имя"
            name="fullName"
            type="text"
            className="form-control"
            id="exampleInputUsername1"
            aria-describedby="userHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Введите вашу почту
          </label>
          <input
            placeholder="mail"
            name="mail"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputNumber1" className="form-label">
            Введите номер телефона
          </label>
          <input
            placeholder="phone number"
            name="phone"
            type="number"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Придумайте пароль
          </label>
          <input
            placeholder="password"
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Номер дисконтной карты
          </label>
          <input
            placeholder="Введите данные"
            name="discount"
            type="number"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Ваш возраст
          </label>
          <input
            placeholder="Введите данные"
            name="age"
            type="date"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Зарегистрироваться
        </button>
      </form>
      <hr />
      <h3 className="regMsg"></h3>
    </Layout>
  );
};
