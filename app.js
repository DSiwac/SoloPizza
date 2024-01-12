require("@babel/register");
require("dotenv").config();
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const express = require("express");
const logger = require("morgan");
const path = require("path");

const { getTime, checkDB } = require("./src/middlewares/checkingDB");
const { secure, check } = require("./src/middlewares/secure");

const mainPage = require("./src/routers/main.router");
const registerRouter = require("./src/routers/registr.router");
const loginRouter = require("./src/routers/login.router");
const basketRouter = require("./src/routers/basket.router");
const historyRouter = require("./src/routers/cabinet.router");
const redactingRouter = require("./src/routers/redact.router");

const PORT = process.env.PORT || 3100;

const app = express();

app.use(checkDB);
app.use(getTime);

const sessionConfig = {
  name: "soloPizza",
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? "Секретное слово",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 999999999,
    httpOnly: true,
  },
};

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

app.use(session(sessionConfig));

app.use("/", mainPage);
app.use("/registr", secure, registerRouter);
app.use("/login", loginRouter);
app.use("/basket", basketRouter);

app.use("/cabinet", redactingRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
