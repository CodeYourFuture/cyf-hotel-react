import React, { useState } from "react";
import Button from "./Button";

const Order = props => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(() => orders + 1);
  }

  return (
    <li className="m-2">
      {props.orderType}: {orders}
      <Button class="warning btn-sm ms-md-3" text="Add" onclick={orderOne} />
    </li>
  );
};

export default Order;
