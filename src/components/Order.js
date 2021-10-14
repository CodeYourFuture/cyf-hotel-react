import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

export default function Order({ orderType, img }) {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li className="orderCard">
      <img src={require(`../data/${img}`)} alt="icon" />
      <p>
        {orderType}: {orders}
      </p>
      <RestaurantButton handleClick={orderOne} />
    </li>
  );
}
