import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <ul className="list-group">
        {props.address.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
