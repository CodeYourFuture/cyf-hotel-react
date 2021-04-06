import React from "react";

const Footer = props => {
  return (
    <footer className="card-footer bg-dark text-light mt-3">
      <ul className="list-unstyled footer">
        {props.hotelAddress.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
