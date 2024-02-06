import React from "react";

const props = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456 789",
];

const Footer = () => {
  return (
    <footer>
      <ul>
        {props.map((props) => (
          <li key={props}>{props}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
