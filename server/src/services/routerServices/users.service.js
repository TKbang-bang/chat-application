const pool = require("../../database/pool");

const getAllUsers = async () => {
  try {
    const [users] = await pool.query(
      "SELECT id, name, lastname, profile_image FROM users"
    );

    return users;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getAllUsers };
