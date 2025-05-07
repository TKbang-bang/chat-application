const pool = require("../../database/pool");

const getMyUserData = async (id) => {
  try {
    const [user] = await pool.query(
      "SELECT id, name, lastname, email, profile_image FROM users WHERE id = ?",
      [id]
    );

    return user[0];
  } catch (error) {
    throw new Error(error);
  }
};

const getUserData = async (id) => {
  try {
    const [user] = await pool.query(
      "SELECT id, name, lastname, profile_image FROM users WHERE id = ?",
      [id]
    );

    return user[0];
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getMyUserData, getUserData };
