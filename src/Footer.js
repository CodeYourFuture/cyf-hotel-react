import React from "react";

const Footer = props => {
  const {
    contacts = [
      "123 Fake Street, London, E1 4UD",
      "hello@fakehotel.com",
      "0123 456789"
    ]
  } = props;

  const result = contacts.map((contact, key) => <li key={key}>{contact}</li>);

  return (
    <footer>
      <ul className="list">{result}</ul>
    </footer>
  );
};

export default Footer;
