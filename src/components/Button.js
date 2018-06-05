import React from "react";
const Button = props => {
  return (
    <button className="btn btn-primary fn-submit-name" onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default Button;
