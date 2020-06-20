import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }

  return (
    <li>
      {props.typeOfOrder}
      {orders}
      <RestaurantButton result={orderOne} />
    </li>
  );
};

export default Order;
