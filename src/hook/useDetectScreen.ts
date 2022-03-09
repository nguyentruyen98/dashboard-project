import {MOBILE_WIDTH} from 'constants/index';
import useWindowSize from 'hook/useWindowSize';
const useDetectScreen = () => {
  const [width] = useWindowSize();
  return width > MOBILE_WIDTH;
};
export default useDetectScreen;
