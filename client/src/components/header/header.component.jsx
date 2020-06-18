import React from "react";
import "./header.style.css";
import onlineIcon from "../../images/onlineIcon.png";
import closeIcon from "../../images/closeIcon.png";

const Header = ({ room, users, name }) => {
  let others = users.filter((user) => {
    if (user.name !== name) return user.name;
  });

  return (
    <div className="header-main-container">
      <div className="left-container">
        <img src={onlineIcon} alt="open" />
        {others.map((user, i) => {
          return <h3 id={i}>{user.name}</h3>;
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
