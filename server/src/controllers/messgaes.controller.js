const ServerError = require("../error/errorClass");
const { getMessages } = require("../services/routerServices/messages.service");

const gettingMessages = async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await getMessages(id, req.session.userID);

    return res.json({ ok: true, messages: result });
  } catch (error) {
    return next(new ServerError(error.message, 500));
  }
};

module.exports = { gettingMessages };
