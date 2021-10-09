import React, { useState } from "react";

const Order = props => {
  const [order, setOrder] = useState(0);
  //console.log(order)
  //console.log(setOrder)

  function orderOne() {
    setOrder(order => order + 1);
  }
  return (
    <li>
      {props.orderType}: {order}{" "}
      <button onClick={() => orderOne()} className="btn btn-primary">
        Add
      </button>
    </li>
  );
};

export default Order;
