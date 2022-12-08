import React from "react";

const Button = props => {
  return (
    <button
      className={"btn btn-" + props.class}
      onClick={props.onclick}
      type={props.type}
      value={props.value}
    >
      {props.text}
    </button>
  );
};

export default Button;
