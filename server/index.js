const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const port = process.env.PORT || 5000;
const router = require("./router");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const moment = require("moment");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

io.on("connection", (socket) => {
  console.log("We have a new user connection");

  // When a user joins
  socket.on("join", ({ name, room }, callback) => {
    const { user, error } = addUser({ id: socket.id, name, room });

    // Lets the user know he has joined the chat
    socket.emit("message", {
      user: "admin",
      text: "You have entered the room",
      time: moment().format("h:mm a"),
    });

    io.to(user.room).emit("messages", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    // Lets the all the other users in the room that he has joined the chat
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `${user.name} has joined`,
      time: moment().format("h:mm a"),
    });

    socket.join(user.room);

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", {
      user: user.name,
      text: message,
      time: moment().format("h:mm a"),
    });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });
    callback();
  });

  socket.on("disconnect", () => {
    console.log("User has left");

    const removed = removeUser(socket.id);
    if (removed) {
      io.to(removed.room).emit("message", {
        user: "admin",
        text: `${removed.name} has left the room`,
        time: moment().format("h:mm a"),
      });
    }
    io.to(removed.room).emit("roomData", {
      room: removed.room,
      users: getUsersInRoom(removed.room),
    });
  });
});

app.use(router);
server.listen(port, () => console.log(`Server has started on port ${port}`));
