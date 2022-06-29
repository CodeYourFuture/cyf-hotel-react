import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <ul>
        {props.details.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
