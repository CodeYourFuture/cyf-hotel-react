import React from "react";

const Footer = ({ info }) => {
  //   const footerInfo = [
  //     "123 Fake Street, London, E1 4UD",
  //     "hello@fakehotel.com",
  //     "0123 456789",
  //   ];
  return (
    <div className="footer">
      <ul>
        {info.map(footerInfo => (
          <li key={footerInfo}>{footerInfo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
