const pool = require("../../database/pool");
const bcrypt = require("bcrypt");

const signup = async (id, name, lastname, email, password) => {
  try {
    // email verification
    const [emailExists] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (emailExists.length > 0)
      return {
        ok: false,
        status: 409,
        message: "Email already in use",
      };

    const sql =
      "INSERT INTO users(id, name, lastname, email, password) VALUES (?, ?, ?, ?, ?)";

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(sql, [id, name, lastname, email, hashedPassword]);

    return { ok: true, message: "User created" };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const login = async (email, password) => {
  try {
    // email verification
    const [emailExists] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (emailExists.length == 0)
      return {
        ok: false,
        status: 404,
        message: "Email not found",
      };

    // password verification
    const verifiedPassword = await bcrypt.compare(
      password,
      emailExists[0].password
    );

    if (!verifiedPassword)
      return {
        ok: false,
        status: 400,
        message: "Incorrect password",
      };

    return { ok: true, message: "User logged in", userId: emailExists[0].id };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { signup, login };
