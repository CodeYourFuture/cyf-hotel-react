import React from "react";

const Footer = ({ adress }) => {
  return (
    <div className="nav flex-column align-items-center bg-secondary text-white p-3">
      <h4>Contact Details</h4>
      <ul className="nav flex-column">
        {adress.map((item, index) => {
          return (
            <li className="nav-item" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
