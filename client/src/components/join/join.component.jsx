import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./join.style.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="header">Join</div>
        <input
          type="text"
          placeholder="Please enter your name"
          className="join-input "
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Please enter the name of the room..."
          className="join-input mt-20"
          onChange={(e) => setRoom(e.target.value)}
        />
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Enter
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;