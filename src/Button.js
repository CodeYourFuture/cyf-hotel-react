import React from "react";

const Button = (props) => {
  return (
    <button
      className={props.className} 
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
