import React from "react";

function Footer(props) {
  return (
    <div>
      {props.address.map(name => (
        <ul className="footer">
          <li>{name}</li>
        </ul>
      ))}
    </div>
  );
}

export default Footer;
