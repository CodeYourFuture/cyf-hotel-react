import React from "react";

const Counter = (props) => {
  return (
    <div>
      <button onClick={props.onIncrease}>{props.name}</button>
    </div>
  );
};

export default Counter;
