import React from "react";

function Footer(props) {
  return (
    <ul>
      {props.info.map(data => (
        <li>{data}</li>
      ))}
    </ul>
  );
}

export default Footer;
