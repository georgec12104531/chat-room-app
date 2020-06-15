const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const port = process.env.PORT || 5000;
const router = require("./router");
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("We have a new user connection");
  
  socket.on("join", ({ name, room }) => {
    console.log(name, room);
  });

  socket.on("test", ({ test }) => {
    console.log(test);
  });

  socket.on("disconnect", () => {
    console.log("User has left");
  });
});

app.use(router);

server.listen(port, () => console.log(`Server has started on port ${port}`));
