import React from "react";

const Button = props => (
  <button
    type={props.type}
    onClick={props.handleClick}
    style={props.style}
    className="btn btn-primary"
  >
    {props.content}
  </button>
);

export default Button;
