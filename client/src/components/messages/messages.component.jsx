import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../message/message.component";
import "./messages.style.css";

const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => {
        return (
          <div key={i}>
            <Message
              message={message}
              name={name}
              prev={messages[i - 1]}
              next={messages[i + 1]}
            ></Message>
          </div>
        );
      })}
    </ScrollToBottom>
  );
};

export default Messages;
