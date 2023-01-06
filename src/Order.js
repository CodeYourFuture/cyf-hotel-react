import React, { useState } from "react";

const Orders = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li className="d-flex justify-content-between">
      {orderType}: {orders}{" "}
      <button className="btn btn-primary ml-3 mb-1" onClick={orderOne}>
        Add
      </button>
    </li>
  );
};

export default Orders;
