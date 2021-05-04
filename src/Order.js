import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = prop => {
  const [order, setOrder] = useState(0);
  const orderOne = () => {
    setOrder(order + 1);
  };
  const cancelOrder = () => {
    setOrder(order * 0);
  };
  return (
    <li>
      <RestaurantButton cancel={cancelOrder} orders={orderOne} />
      &nbsp;&nbsp;{prop.orderType}: {order}
    </li>
  );
};

export default Order;
