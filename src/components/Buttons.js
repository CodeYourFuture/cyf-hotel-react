import React from "react";

const Button = props => {
  return (
    <button className="btn btn-primary" onClick={props.onClick}>
      {props.name}
    </button>
  );
};
export default Button;
