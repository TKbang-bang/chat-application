const { Router } = require("express");
const { gettingAllUsers } = require("../controllers/users.controller");

const usersRouter = Router();

usersRouter.get("/all", gettingAllUsers);

module.exports = usersRouter;
