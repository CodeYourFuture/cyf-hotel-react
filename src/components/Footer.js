import React from "react";
import "./Footer.css";

const Footer = () => {
  const contactDetails = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <footer>
      <ul>
        {contactDetails.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <div>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
