import React from "react";

function Footer(props) {
  return (
    <ul>
      {props.footer.map((info, i) => (
        <li key={i}>{info}</li>
      ))}
    </ul>
  );
}

export default Footer;
