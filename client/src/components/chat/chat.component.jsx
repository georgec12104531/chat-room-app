import React, { useState, useEffect } from "react";
import queryString from "query-string";

import io from "socket.io-client";
import Header from "../header/header.component";
import Messages from "../messages/messages.component";
import Input from "../input/input.component";
import "./chat.style.css";
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const endPoint = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    // Create a socket instance linked to our endpoint
    socket = io(endPoint);
    setName(name);
    setRoom(room);
    // Send an event
    socket.emit("join", { name, room });

    // unmounting
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [endPoint, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [messages, users]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="main-container">
      <div className="container">
        <Header users={users} room={room} name={name}></Header>
        <Messages messages={messages} name={name}></Messages>
        <Input
          sendMessage={sendMessage}
          message={message}
          setMessage={setMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
