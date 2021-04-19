import React from "react";

const Footer = props => {
  return (
    <footer className="footer">
      <ul className="list-group">
        {props.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
