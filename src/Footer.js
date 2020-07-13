import React from "react";

const Footer = ({ adress }) => {
  console.log(adress);
  return (
    <div className="nav flex-column align-items-center bg-secondary text-white p-3">
      <h3>Contact Details</h3>
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
