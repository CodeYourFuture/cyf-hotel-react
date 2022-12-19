import React from "react";
export const themes = {
  light: {
    color: "#000000",
    backgroundColor: "#eeeeee"
  },
  dark: {
    color: "#ffffff",
    backgroundColor: "#222222"
  }
};
const ThemeContext = React.createContext();
export default ThemeContext;
