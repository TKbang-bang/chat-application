const { Server } = require("socket.io");
const sessionMiddleware = require("../../ultils/sessionMidleware");

const startSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: `${process.env.CLIENT_URL}`,
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.use((socket, next) => {
    sessionMiddleware(socket.request, {}, next);
  });

  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("message", (data) => {
      console.log(data);
    });
  });
};

module.exports = startSocket;
