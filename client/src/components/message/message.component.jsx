import React from "react";
import "./message.style.css";

const Message = ({ message: { user, text, time }, name, prev, next }) => {
  let isSentByCurrentUser = false;
  let trimmedName = name.trim().toLowerCase();

  let group = prev && prev.user === trimmedName ? true : false;
  let otherGroup = prev ? prev.user === user : false;

  let showTimeStamp = next && next.user === trimmedName ? false : true;
  let otherShowTimeStamp = next && next.user === user ? false : true;

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="message-container justify-end">
      {group ? <div></div> : <p className="sent-text">{trimmedName}</p>}

      {showTimeStamp ? <p>{time}</p> : <p></p>}
      <div className="message-box backgroundBlue">
        <p className="message-text">{text}</p>
      </div>
    </div>
  ) : (
    <div className="message-container justify-start">
      <div className="message-box backgroundLight">
        <p className="message-text colorDark">{text}</p>
      </div>
      {otherGroup ? <div></div> : <p className="sent-text">{user}</p>}
      {otherShowTimeStamp ? <p>{time}</p> : <p></p>}
    </div>
  );
};

export default Message;
