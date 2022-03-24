import React from "react";

const Footer = ({ footerData }) => {
  console.log(footerData);
  return (
    <ul className="footer list-group">
      {footerData.map((data, i) => {
        return (
          <li className="list-item" key={i}>
            {data}
          </li>
        );
      })}
    </ul>
  );
};

export default Footer;
