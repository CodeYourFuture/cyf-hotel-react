import React from "react";

const Footer = (props) => {
  return (
      <footer className="footer">
        <ul className="footer-ul">
          {props.address.map((element) => {
            return <li className="footer-list" key={element}>{element}</li>;
          })}
        </ul>
      </footer>
  );
};

export default Footer;
