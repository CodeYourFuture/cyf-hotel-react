import React from "react";
import { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }

  function removeOneOrder() {
    orders && setOrders(orders - 1);
  }

  return (
    <li>
      {orderType}: {orders}{" "}
      <RestaurantButton handleClick={orderOne} text={"ADD"} />{" "}
      <RestaurantButton handleClick={removeOneOrder} text={"REMOVE"} />
    </li>
  );
};

export default Order;
