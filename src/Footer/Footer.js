import React from "react";

import "./Footer.css";

const Footer = props => {
  return (
    <footer className="footer">
      <ul>
        <p>&copy; CYF Hotel 2022</p>
        {props.contactInfo.map((element, index) => {
          return (
            <li key={index} className="footer-item">
              {element}
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
