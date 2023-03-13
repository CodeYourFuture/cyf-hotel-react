import React from "react";
import "./footer.css";
function Footer({ address }) {
  return (
    <footer className="footer">
      <ul>
        {address.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      Github accunt : <a href="https://github.com/hadipournigjeh">Hadi A.P</a>
    </footer>
  );
}
export default Footer;
