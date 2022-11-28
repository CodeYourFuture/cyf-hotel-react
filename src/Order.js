import React from "react";
import { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  const oderOne = () => {
    setOrders(order => order + 1);
  };
  return (
    <li className="restaurantOrders">
      {props.orderType} : {orders}
      <RestaurantButton addOrder={oderOne} />
      {""}
    </li>
  );
};
export default Order;
