const ServerError = require("../error/errorClass");
const { signup, login } = require("../services/routerServices/auth.service");

const signingup = async (req, res, next) => {
  const { name, lastname, email, password } = req.body;
  const userId = crypto.randomUUID();

  try {
    const result = await signup(userId, name, lastname, email, password);

    if (!result.ok) return next(new ServerError(result.message, result.status));

    req.session.userID = userId;
    req.session.save();

    return res.status(201).json({ ok: true, message: result.message });
  } catch (error) {
    return next(new ServerError(error.message, 500));
  }
};

const logingin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const result = await login(email, password);

    if (!result.ok) return next(new ServerError(result.message, result.status));

    req.session.userID = result.userId;
    req.session.save();

    return res.status(201).json({ ok: true, message: result.message });
  } catch (error) {
    return next(new ServerError(error.message, 500));
  }
};

const userVerifying = async (req, res, next) => {
  if (!req.session.userID) return next(new ServerError("Unauthorized", 401));

  return res.status(201).json({ ok: true, message: "Authorized" });
};

module.exports = { signingup, logingin, userVerifying };
