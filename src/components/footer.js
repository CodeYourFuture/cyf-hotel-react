import React from "react";

const footerData = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = () => {
  console.log(footerData[0]);

  return (
    <div>
      <ul>
        {footerData.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
