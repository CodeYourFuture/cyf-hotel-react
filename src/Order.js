import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton ";

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <p className="orders">
      <b>{props.orderType}</b>: {orders}
      <RestaurantButton orderOne={orderOne} />
    </p>
  );
};

export default Order;
