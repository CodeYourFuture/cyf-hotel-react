import React from "react";

function Footer(props) {
  const myFooter = props.myFooter;
  return (
    <ul>
      {myFooter.map(name => (
        <li>{name}</li>
      ))}
    </ul>
  );
}

export default Footer;
