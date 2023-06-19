import React from "react";

const Footer = (props) => {
  return (
      <footer className="footer">
        <ul className="footer-ul">
          {props.address.map((element, index) => {
            return <li className="footer-list" key={index}>{element}</li>;
          })}
        </ul>
      </footer>
  );
};

export default Footer;
