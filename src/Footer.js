import React from "react";

const Footer = prop => {
  return (
    <div>
      <hr />
      <footer className="footer">
        <ul className="ul">
          {prop.address.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
