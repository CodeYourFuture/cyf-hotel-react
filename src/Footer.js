import React from "react";
function Footer() {
  const footArray = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="footer">
      <ul className="footerlist">
        {footArray.map(el => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
