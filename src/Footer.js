import React from "react";
import PropTypes from "prop-types";

const Footer = ({ football }) => {
  return (
    <ul className="footer">
      {football.map((obj, index) => {
        return <li key={index}> {obj}</li>;
      })}
    </ul>
  );
};

Footer.propTypes = {
  contact: PropTypes.array
};

export default Footer;
