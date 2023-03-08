import React from "react";

const Address = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const Footer = () => {
  return (
    <div>
      <ul className="Footer">
        {Address.map(name => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;

/*
const mentors = ["Ali", "Kash", "Davide", "German", "Gerald"];

function MentorsList() {
  return (
    <ul>
      {mentors.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  );
} */
