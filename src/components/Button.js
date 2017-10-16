import React from 'react';

const Button = (props) => (
  <button className="btn btn-primary fn-submit-name" onClick={props.onClick}>
    {props.label}
  </button>
);

export default Button;

