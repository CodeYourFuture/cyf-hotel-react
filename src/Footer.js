import React from "react";

function Footer(props) {
  return (
    //props.list -> array
    <ul>
      {props.list.map(e => (
        <li>{e}</li>
      ))}
    </ul>
  );
}

export default Footer;
