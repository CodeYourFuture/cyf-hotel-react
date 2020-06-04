import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import "./App.css";

const Order = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <ul className="order">
      <li className="order-list">
        {props.orderType}: {orders}
      </li>
      <RestaurantButton orderOneFun={orderOne} />
    </ul>
  );
};
export default Order;
