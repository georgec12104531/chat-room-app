import React from "react";
import "./input.style.css";
import send from "../../icons/send.png";

const Input = ({ message, sendMessage, setMessage }) => {
  return (
    <div className="input-container">
      <input
        className="input"
        type="text"
        value={message}
        placeholder="Type your message here..."
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <div className="send-message-container">
        <img
          alt="send-message"
          className="send"
          src={send}
          onClick={(e) => sendMessage(e)}
        ></img>
      </div>
    </div>
  );
};

export default Input;
