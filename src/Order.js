import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import "./App.css";
import "./Grid.css";

const Order = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <ul className="order col-4 lg-col-3">
      <li className="order-list col-7 lg-col-6">
        {props.orderType}: {orders}
      </li>
      <RestaurantButton orderOneFun={orderOne} />
    </ul>
  );
};
export default Order;
