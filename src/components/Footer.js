import React from "react";

function Footer(props) {
  return (
    <ul>
      {props.info.map((data, index) => (
        <li key={index}>{data}</li>
      ))}
    </ul>
  );
}

export default Footer;
