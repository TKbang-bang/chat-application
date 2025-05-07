const { Router } = require("express");
const {
  signingup,
  logingin,
  userVerifying,
} = require("../controllers/auth.controller");

const authRouter = Router();

authRouter.post("/signup", signingup);
authRouter.post("/login", logingin);
authRouter.get("/verify", userVerifying);

module.exports = authRouter;
