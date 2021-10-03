import React from "react";

let Footer = props => {
  return (
    <footer>
      <ul className="footer d-flex d-flex-row justify-content-center">
        {props.contactInfo.map((method, index) => (
          <li className="m-3" key={index}>
            {method}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
