import React, { useState } from "react";

function Order({ orderType }) {
  const [Orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(Orders + 1);
  }
  return (
    <li>
      {orderType}: {Orders}{" "}
      <button className="btn btn-primary" onClick={orderOne}>
        Add
      </button>
    </li>
  );
}

export default Order;
