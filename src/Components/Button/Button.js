import React from "react";

const Button = props => {
  return (
    <button onClick={props.function} className={props.arrOfClasses.join(" ")}>
      {props.inner}
    </button>
  );
};

export default Button;
