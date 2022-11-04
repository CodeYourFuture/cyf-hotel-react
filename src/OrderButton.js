import React from "react";

const Button = props => {
  return (
    <div>
      <button onClick={props.onClick} className="addButt">
        add
      </button>
    </div>
  );
};

export default Button;
