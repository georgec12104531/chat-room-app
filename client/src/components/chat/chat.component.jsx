import React, { useState, useEffect } from "react";
import queryString from "query-string";

import io from "socket.io-client";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const endPoint = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    // Create a socket instance linked to our endpoint
    socket = io(endPoint);
    setName(name);
    setRoom(room);

    // Send an event
    socket.emit("join", { name, room });

    socket.emit("test", { test: "test" });
  }, [endPoint, location.search]);

  return <h1>Chat</h1>;
};

export default Chat;
