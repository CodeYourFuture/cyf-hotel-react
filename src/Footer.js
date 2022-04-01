import React from "react";

function Footer(props) {
  return (
    <ul className="footer">
      {props.details.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}

export default Footer;
