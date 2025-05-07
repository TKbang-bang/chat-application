const { getAllUsers } = require("../services/routerServices/users.service");
const ServerError = require("../error/errorClass");

const gettingAllUsers = async (req, res, next) => {
  try {
    const result = await getAllUsers();

    return res.json({ ok: true, users: result });
  } catch (error) {
    return next(new ServerError(error.message, 500));
  }
};

module.exports = { gettingAllUsers };
