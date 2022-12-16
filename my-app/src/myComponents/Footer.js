import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

import "../App.css";
export default function Footer({ footer }) {
  const theme = useContext(ThemeContext);
  return (
    <div className="fixed-bottom footerContaner" style={{ ...theme }}>
      <ul className="blockquote-footer footer">
        {footer.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
