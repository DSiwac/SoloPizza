const React = require("react");
const Layout = require("./Layout");

module.exports = function Login() {
  return (
    <Layout>
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet">
        
      </link>
      <script defer src="/client/login.js" />
      <h2 className="hTag">Войдите на сайт</h2>
      <hr />
      <form action="/login" method="POST" id="loginForm">
        <label htmlFor="exampleInput1" className="form-label">
          Введите логин
        </label>
        <input
          placeholder="login"
          name="login"
          type="text"
          className="form-control shadow rounded"
          id="exampleInput1"
        />
        <label htmlFor="exampleInput2" className="form-label">
          Введите пароль
        </label>
        <input
          placeholder="password"
          name="password"
          type="password"
          className="form-control shadow rounded"
          id="exampleInput2"
        />
        <hr />
        <button type="submit" className="btn btn-primary shadow rounded">
          Отправить
        </button>
      </form>
      <hr />
      <h3 className="logMsg"></h3>
    </Layout>
  );
};
