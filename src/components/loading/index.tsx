import "./index.scss";

import loadingIcon from "assets/icons/loading-icon.png";
import React from "react";
const Loading = () => {
  return (
    <img
      className="loading"
      src={loadingIcon}
      alt="Loading"
      height={50}
      width={50}
    />
  );
};

export default Loading;
