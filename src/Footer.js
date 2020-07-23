import React from "react";
function Footer(props) {
  const contactInfo = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <ul className="footer">
      {contactInfo.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

export default Footer;
