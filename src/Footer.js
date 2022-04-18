import React from "react";

const Footer = props => {
  const contacts = props.data;
  return (
    <footer className="footer">
      <ul>
        {contacts.map((contact, id) => {
          return <li key={id}>{contact}</li>;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
