const { Router } = require("express");
const {
  gettingMyUserData,
  gettingUserData,
} = require("../controllers/user.controller");
const userRouter = Router();

userRouter.get("/me", gettingMyUserData);
userRouter.get("/:id", gettingUserData);

module.exports = userRouter;
