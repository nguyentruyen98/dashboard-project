import { Button as AntdButton } from "antd";
import Buttom from "components/button";
import React from "react";
const Home = () => {
  return (
    <div>
      <Buttom type="dashed" danger>
        MY BUTTON
      </Buttom>
      <AntdButton>MY BUTTON</AntdButton>
    </div>
  );
};

export default Home;
