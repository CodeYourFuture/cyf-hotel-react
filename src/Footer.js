import React from "react";

// address
const props = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        {props.map((props) => (
          <p key={props}>{props}</p>
        ))}
      </ul>
    </footer>
  );
};
// footer export
export default Footer;
