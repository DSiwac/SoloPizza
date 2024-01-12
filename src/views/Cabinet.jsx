const React = require("react");
const Layout = require("./Layout");

module.exports = function RedactForm({ login }) {
  
  return (
    <Layout login={login}>
      <script defer src="client/cabinet.js"></script>
      <form method="PUT" action={`/redacting/${login.id}`} id="redactForm">
        <div className="mb-3">
          <label htmlFor="exampleInputUsername1" className="form-label">
            Изменить имя
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
            Введите новый номер телефона
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
            Поменяйте пароль
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
          Изменить данные
        </button>
      </form>
      <hr />
      <h3 className="redactMsg"></h3>
    </Layout>
  );
};
