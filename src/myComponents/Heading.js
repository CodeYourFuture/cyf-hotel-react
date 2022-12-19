import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function Heading() {
  const theme = useContext(ThemeContext);
  return (
    <div className="headerRap" style={{ ...theme }}>
      <header className="header">CYF Hotel</header>
    </div>
  );
}
