import React from "react";

const Footer = ({ address }) => {
  const addressLines = address.map((line, i) => (
    <li key={`address-line${i}`}>{line}</li>
  ));

  return (
    <footer>
      <ul>{addressLines}</ul>
    </footer>
  );
};

export default Footer;
