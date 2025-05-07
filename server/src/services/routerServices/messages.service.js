const pool = require("../../database/pool");

const getMessages = async (id, myId) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM messages WHERE from_id = ? AND to_id = ? OR from_id = ? AND to_id = ?",
      [id, myId, myId, id]
    );

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getMessages };
