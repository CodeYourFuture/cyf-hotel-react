import React from "react";
const Footer = () => {
  const address = [
    "123 Fake Street",
    "London",
    "E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <footer className="footer">
      <div>
        <p>Contact Details</p>
        <ul>
          {address.map((list, i) => (
            <li key={i}>{list}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
