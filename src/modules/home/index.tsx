import { Button as AntdButton } from "antd";
import Buttom from "components/button";
import useDetectScreen from "hook/useDetectScreen";
import useWindowResize from "hook/useWindowSize";
import React from "react";
import {
  decrement,
  increment,
  useAppDispatch,
  useAppSelector,
} from "stores/application/application";
const Home = () => {
  const [width, height] = useWindowResize();
  const isMoblieScreen = useDetectScreen();
  const count = useAppSelector((state) => state.couter.value);
  const dispatch = useAppDispatch();

  // console.log(count?.couter.value);
  return (
    // drop every test case here
    <div>
      <Buttom type="dashed" danger>
        MY BUTTON
      </Buttom>
      <AntdButton>MY BUTTON</AntdButton>
      <p>{`Current width: ${width}`}</p>
      <p>{`Current height: ${height}`}</p>
      <p>{`Is mobile screen: ${isMoblieScreen}`}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <p>{count}</p>
    </div>
  );
};

export default Home;
