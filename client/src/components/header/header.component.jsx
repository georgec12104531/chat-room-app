import React from "react";
import "./header.style.css";
import onlineIcon from "../../images/onlineIcon.png";
import closeIcon from "../../images/closeIcon.png";

const Header = ({ room, users, name }) => {
  let others = users.filter((user) => {
    return user.name !== name.toLowerCase();
  });
  let online = others.length;

  return (
    <div className="header-main-container">
      <div className="left-container">
        {online ? <img src={onlineIcon} alt="open" /> : null}
        {others.map((user, i) => {
          return (
            <div className="header-text" key={i}>
              {user.name}
            </div>
          );
        })}
      </div>
      <div className="right-container">
        <a href="/">
          <img src={closeIcon} alt="close" />
        </a>
      </div>
    </div>
  );
};

export default Header;
