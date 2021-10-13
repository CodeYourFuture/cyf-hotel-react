import React, { useState } from "react";

const Order = prop => {
  const [order, setOrder] = useState(0);
  console.log(order);
  function orderOne() {
    setOrder(order => order + 1);
  }
  return (
    <li>
      {prop.orderType}
      {Order}
      {""}
      <button onClick={() => orderOne()} className="btn btn-primary">
        Add
      </button>
    </li>
  );
};

export default Order;
