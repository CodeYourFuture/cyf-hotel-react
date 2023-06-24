import React from "react";

const Footer = (props) => {
  return (
    <footer className="footer">
      <ul className="un-list">
        {props.contacts.map((item) => (
          <li key={item} className="list">
            {item}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
