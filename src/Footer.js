import React from "react";

function Footer(props) {
  return (
    <ul className="footer">
      {props.info.map(data => (
        <li>{data}</li>
      ))}
    </ul>
  );
}

export default Footer;
