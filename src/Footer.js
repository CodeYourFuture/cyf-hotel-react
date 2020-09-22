import React from "react";

const Footer = props => {
  //   const footerInfo = [
  //     "123 Fake Street, London, E1 4UD",
  //     "hello@fakehotel.com",
  //     "0123 456789",
  //   ];
  return (
    <ul>
      {props.info.map(footerInfo => (
        <li key={footerInfo}>{footerInfo}</li>
      ))}
    </ul>
  );
};

export default Footer;
