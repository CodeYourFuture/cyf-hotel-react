import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <ul className="list-group">
        {props.address.map(element => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
