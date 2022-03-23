import React from "react";

function Footer(props) {
  return (
    <ul className="footer">
      {props.details.map(text => (
        <li>{text}</li>
      ))}
    </ul>
  );
}

export default Footer;
