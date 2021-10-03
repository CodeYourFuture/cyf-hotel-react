import React from "react";

const Footer = () => {
  const footerDetails = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="card-footer text-center">
      <ul className="list-unstyled">
        {footerDetails.map(contact => (
          <li>{contact}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
