const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const options = require("../ultils/database.util");

const sessionStore = new MySQLStore(options);

module.exports = sessionStore;
