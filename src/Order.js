import React, { useState } from "react";

const Order = props => {
  const [order, setOrder] = useState(0);
  // const state = useState(0)
  // console.log("State", state);
  // const or = [0]
  // console.log("or", or);
  // const setOr = state[1]
  // console.log("setOr", setOr)

  function orderOne() {
    setOrder(order => order + 1);
  }
  return (
    <li>
      {props.orderType}: {order}{" "}
      <button onClick={orderOne} className="btn btn-primary">
        Add
      </button>
    </li>
  );
};

export default Order;
