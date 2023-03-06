import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = (props) => {
  const orderOne = () => {
    props.setOrders(props.orders + 1);
  };
  return (
    <li>
      {props.orderType}: {props.orders} <RestaurantButton order={orderOne} />
    </li>
  );
};

export default Order;
