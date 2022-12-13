import React from "react";

const Footer = ({ footerInfo }) => {
  return (
    <footer
      id="sticky-footer"
      className="flex-shrink-0 py-4 bg-dark text-white-50"
    >
      <div className="container text-center">
        <ul className="d-flex justify-content-between">
          {footerInfo.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
