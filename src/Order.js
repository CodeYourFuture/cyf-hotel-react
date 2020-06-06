import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [Order, setOrders] = useState(0);

  function orderOne() {
    setOrders(Order + 1);
  }
  return (
    <li>
      {props.orderType}: {Order}
      <RestaurantButton handleOrder={orderOne} />
    </li>
  );
};

export default Order;
