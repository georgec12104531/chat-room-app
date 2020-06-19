import React from "react";
import "./message.style.css";
import selfProfile from "../../icons/profile.png";
import otherProfile from "../../icons/avatar.png";

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
    <div className="message-main-container">
      <div className="message-container justify-end">
        <div className="message-box backgroundLight">
          <p className="message-text colorDark">{text}</p>
        </div>
        {group ? (
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
        {otherGroup ? (
          <div className="profile-spacing"></div>
        ) : (
          <img
            alt="self-profile"
            className="profile profile-spacing"
            src={otherProfile}
          ></img>
        )}
        <div className="message-box backgroundBlue">
          <p className="message-text">{text}</p>
        </div>
      </div>
      {otherShowTimeStamp ? (
        <p className="sent-text time-spacing-left">{time}</p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Message;
