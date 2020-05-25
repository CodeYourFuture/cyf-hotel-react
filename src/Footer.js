import React from "react";

function Footer(props) {
  return (
    <div>
      <ul className="footer">
        <li>{props.address[0]}</li>
        <li>{props.address[1]}</li>
        <li>{props.address[2]}</li>
      </ul>
    </div>
  );
}

export default Footer;
