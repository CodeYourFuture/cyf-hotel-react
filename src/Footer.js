import React from "react";

const Footer = props => {
  return (
    <footer>
      {/* Pass array as props and map to create list */}
      <ul>
        {props.Address.map((Address, index) => (
          <li key={index}>{Address}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
