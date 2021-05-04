import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  function cancel() {
    setOrders(0);
  }
  function decreaseOrder() {
    if (orders - 1 >= 0) {
      setOrders(orders - 1);
    } else {
      return;
    }
  }
  return (
    <li>
      <h3>
        {orderType}:{orders}
      </h3>{" "}
      <RestaurantButton
        cancelOrder={cancel}
        orderOne={orderOne}
        decreaseOrder={decreaseOrder}
      />
    </li>
  );
};

export default Order;
