import React from "react";
import "./input.style.css";

const Input = ({ message, sendMessage, setMessage }) => {
  return (
    <div className="input-container">
      <input
        className="input"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <button className="send-button" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </div>
  );
};

export default Input;
