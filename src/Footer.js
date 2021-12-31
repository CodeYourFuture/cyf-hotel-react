import React from "react";

function Footer(props) {
  return (
    <ul>
      {props.data.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

export default Footer;
