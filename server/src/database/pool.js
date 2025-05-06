const mysql = require("mysql2");
const options = require("../ultils/database.util");

const pool = mysql
  .createPool({
    ...options,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })
  .promise();

module.exports = pool;
