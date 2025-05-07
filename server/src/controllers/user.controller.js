const ServerError = require("../error/errorClass");
const {
  getMyUserData,
  getUserData,
} = require("../services/routerServices/user.service");

const gettingMyUserData = async (req, res, next) => {
  try {
    const result = await getMyUserData(req.session.userID);

    return res.json({ ok: true, user: result });
  } catch (error) {
    return next(new ServerError(error.message, 500));
  }
};

const gettingUserData = async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await getUserData(id);

    return res.json({ ok: true, user: result });
  } catch (error) {
    return next(new ServerError(error.message, 500));
  }
};

module.exports = { gettingMyUserData, gettingUserData };
