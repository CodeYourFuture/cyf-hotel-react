//import React from "react";
import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(numberOfOrders => {
      return numberOfOrders + 1;
    });
  };
  return (
    <ul>
      {props.orderType}: {orders}
      <RestaurantButton Quantity={orderOne} />
    </ul>
  );
};
export default Order;
