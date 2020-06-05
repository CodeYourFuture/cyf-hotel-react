import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton ";

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <p>
      {props.orderType}: {orders}
      <RestaurantButton orderOne={orderOne} />
    </p>
  );
};

export default Order;
