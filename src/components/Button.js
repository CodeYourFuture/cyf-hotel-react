import React from "react";

const Button = props => {
  return (
    <button
      className="btn btn-primary"
      onClick={props.onclick}
      value={props.value}
    >
      {props.text}
    </button>
  );
};

export default Button;
