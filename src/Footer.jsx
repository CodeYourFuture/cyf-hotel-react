import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <ul className="list">
        <li>{props.contact}</li>
      </ul>
    </div>
  );
}

export default Footer;
