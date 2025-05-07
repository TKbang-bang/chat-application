const { Router } = require("express");
const { gettingMessages } = require("../controllers/messgaes.controller");

const messagesRouter = Router();

messagesRouter.get("/:id", gettingMessages);

module.exports = messagesRouter;
