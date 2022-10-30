import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  let [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders => orders + 1);
  };
  return (
    <li className="OrderList">
      {props.orderType}: <span>{orders}</span>{" "}
      <RestaurantButton eventHandler={orderOne} />
    </li>
  );
};

export default Order;
