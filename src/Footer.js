import React from "react";

const Footer = props => {
  return (
    <div className="nav flex-column align-items-center bg-secondary text-white p-3 mt-5">
      <h4>Contact Details</h4>
      <ul className="nav flex-column">
        {props.adress.map((item, index) => {
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
