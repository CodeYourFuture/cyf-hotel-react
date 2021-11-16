import React from "react";

const Footer = ({ location }) => {
  return (
    <footer className="page-footer p-5 bg-dark row">
      <ul className="list-group card">
        <li className="list-group-item">
          <p className="font-weight-bold">How to contact us...</p>
        </li>
        {location.map(line => (
          <li key={line} className="list-group-item font-italic">
            {line}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
