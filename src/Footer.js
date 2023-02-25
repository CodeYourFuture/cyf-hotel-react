import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.adress.map((item, key) => (
          <li className="footer-list" key={key}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
