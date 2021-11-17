import React from "react";

const Footer = props => {
  return (
    <footer className="footer">
      <ul className="list">
        {props.contacts.map((item, index) => (
          <li key={index} className="list-item">
            {item}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
