const session = require("express-session");
const sessionStore = require("./sessionStore");

const sessionMiddleware = session({
  store: sessionStore,
  secret: `${process.env.SESSION_SECRET}`,
  key: `${process.env.SESSION_KEY}`,
  resave: false,
  saveUninitialized: false,
});

module.exports = sessionMiddleware;
