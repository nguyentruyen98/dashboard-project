import { Button as AntdButton } from "antd";
import Buttom from "components/button";
import useWindowResize from "hook/useWindowSize";
import React from "react";
const Home = () => {
  const [width, height] = useWindowResize();

  return (
    // drop every test case here
    <div>
      <Buttom type="dashed" danger>
        MY BUTTON
      </Buttom>
      <AntdButton>MY BUTTON</AntdButton>
      <p>{`Current width: ${width}`}</p>
      <p>{`Current height: ${height}`}</p>
    </div>
  );
};

export default Home;
