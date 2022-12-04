import React from "react";
import "./App.css";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.contacts.map((info, index) => (
          <li className="listItem" key={index}>
            {info}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
