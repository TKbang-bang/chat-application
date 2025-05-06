const express = require("express");
const cors = require("cors");
const sessionMiddleware = require("./ultils/sessionMidleware");
const router = require("./routes/router");
const http = require("http");
const socketService = require("./services/socketServices/socket.service");
require("dotenv").config();

// initialize app
const app = express();
const server = http.createServer(app);

// middleware
app.use(cors());
app.use(express.json());

// setup session
app.use(sessionMiddleware);

// routes
app.use(router);

// start socket
socketService(server);

// start server
server.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});
