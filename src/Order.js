import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton ";

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  const removeOne = () => {
    orders > 0 ? setOrders(orders - 1) : setOrders(0);
  };

  return (
    <p className="orders">
      <b>{props.orderType}</b>: {orders}
      <RestaurantButton orderOne={orderOne} removeOne={removeOne} />
    </p>
  );
};

export default Order;
