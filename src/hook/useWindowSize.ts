import {useEffect, useState} from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleWindowResize = () =>
      setSize({width: window.innerWidth, height: window.innerHeight});

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return [size.width, size.height];
};
export default useWindowSize;
