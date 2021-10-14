import React from "react";

function Footer(props) {
  return (
    <div className="footerpage">
      <ul>
        {props.adress.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
