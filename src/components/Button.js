import React from 'react';

const Button = (props) => (
  <button className="btn btn-primary fn-submit-name" onClick={props.handleClick}>
    {props.label}
  </button>
);

export default Button;

