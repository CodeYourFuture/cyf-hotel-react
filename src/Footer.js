import React from "react";

const footerArray = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];

function Footer() {
  const footerAddress = footerArray.map((item, index) => {
    return (
      <>
        <ul className="footer">
          <li key={index}>{item}</li>
        </ul>
      </>
    );
  });
  return <>{footerAddress}</>;
}

export default Footer;
