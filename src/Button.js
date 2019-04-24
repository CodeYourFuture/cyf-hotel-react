import React from "react";

function Button(props) {
  console.log(props);
  return (
    <button onClick={props.onClick} className="btn btn-primary">
      {props.content}
    </button>
  );
}

export default Button;
