import { useState } from "react";

export const useTheme = (): [string, () => void] => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return [theme, toggleTheme];
};
export default useTheme;
