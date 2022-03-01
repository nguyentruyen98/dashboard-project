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
        <img
          src="https://img.icons8.com/dusk/64/000000/circled-user-male-skin-type-1-2.png"
          height={35}
          width={35}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Header;
