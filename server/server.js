const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server,{
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"]
  }
});

const onConnection = (socket) => {
  console.log(`A user connected with id: ${socket.id}`);
  
  socket.on("disconnect", () => {
    console.log(`A user disconnected with id: ${socket.id}`);
  });
  
  socket.on("message", (msg) => {
    console.log("message: " + msg);
    io.emit("message", `${process.env.POD_NAME} - ${msg}`);
  });
};

io.on("connection", onConnection);

server.listen(5000, () => {
  console.log("Server is running on http://localhost:3000");
});
