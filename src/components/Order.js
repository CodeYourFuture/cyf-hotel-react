import React, { useState } from "react";
import { RestaurantButton } from "./RestaurantButton";

export const Order = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li style={{ marginLeft: "30px" }}>
      {props.orderType}: {orders} <RestaurantButton button={orderOne} />
    </li>
  );
};
