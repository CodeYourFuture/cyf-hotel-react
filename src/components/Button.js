import React from "react";

const Button = props => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary"
    >
      More Info
    </a>
  );
};

export default Button;
