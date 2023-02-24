import React from "react";
const Footer = props => {
  return (
    <ul className="Footer">
      {props.data.map((item, index) => (
        <li key={index} className="Li-List">
          {item}
        </li>
      ))}
    </ul>
  );
};
export default Footer;
