import userIcon from "assets/icons/user-icon.png";
import React from "react";
import { useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();

  const getMatchTitle = (url: string) => {
    const title = url;
    return title;
  };

  return (
    <div className="header">
      <p className="title">{getMatchTitle(location.pathname)}</p>
      <div className="profile">
        <p className="user-name">Truyen Nguyen</p>
        <img src={userIcon} height={40} width={40} alt="Profile" />
      </div>
    </div>
  );
};

export default Header;
