import React from "react";
import "./message.style.css";
import selfProfile from "../../icons/profile.png";
import otherProfile from "../../icons/avatar.png";

const Message = ({ message: { user, text, time }, name, prev, next }) => {
  let isSentByCurrentUser = false;
  let trimmedName = name.trim().toLowerCase();

  let groupMessages = prev && prev.user === trimmedName;
  let groupOtherMessages = prev && prev.user === user;

  let showTimeStamp = next && next.user === trimmedName ? false : true;
  let showOtherTimeStamp = next && next.user === user ? false : true;

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="message-main-container">
      <div className="message-container justify-end">
        <div className="message-box background-light">
          <p className="message-text color-dark">{text}</p>
        </div>
        {groupMessages ? (
          <div className="profile-spacing"></div>
        ) : (
          <img
            alt="self-profile"
            className="profile profile-spacing"
            src={selfProfile}
          ></img>
        )}
      </div>
      {showTimeStamp ? (
        <p className="sent-text time-spacing-right">{time}</p>
      ) : (
        <p></p>
      )}
    </div>
  ) : (
    <div className="message-main-container align-start">
      <div className="message-container justify-start">
        {groupOtherMessages ? (
          <div className="profile-spacing"></div>
        ) : (
          <img
            alt="self-profile"
            className="profile profile-spacing"
            src={otherProfile}
          ></img>
        )}
        <div className="message-box background-blue">
          <p className="message-text">{text}</p>
        </div>
      </div>
      {showOtherTimeStamp ? (
        <p className="sent-text time-spacing-left">{time}</p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Message;
