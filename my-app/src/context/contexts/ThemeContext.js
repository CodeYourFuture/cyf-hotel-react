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
//createContext function takes a default value as an argument and returns an object with a Provider and a Consumer component
//Provider component is used to provide a value to all components that are descendants of the Provider component
//Consumer component is used to consume the value provided by the Provider component
//Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider component
