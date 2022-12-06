import React from "react";

const Footer = ({ footerInfo }) => {
  return (
    <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
      <div class="container text-center">
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
