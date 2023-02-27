import React from "react";

const props = [
    "123 Fake Street, London, E1 4UD", 
    "hello@fakehotel.com", 
    "0123 456789"
];


const Footer = () => {
  return (
    <footer>
      <ul className="footer-contact">
        {props.map((props) => (
          <li key={props}>{props}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
