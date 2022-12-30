import React from "react";
import { useState } from "react";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }

  return (
    <li>
      {orderType}: {orders}{" "}
      <button className="btn btn-primary" onClick={orderOne}>
        Add
      </button>
    </li>
  );
};

export default Order;
