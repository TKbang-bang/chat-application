const { Router } = require("express");
const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const usersRouter = require("./users.route");
const messagesRouter = require("./messages.route");
const router = Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/users", usersRouter);
router.use("/messages", messagesRouter);

module.exports = router;
