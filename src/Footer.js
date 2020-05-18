import React from "react";

const Footer = () => {
  const footerDetails = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <>
      <ul className="footer">
        {footerDetails.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </>
  );
};

export default Footer;
