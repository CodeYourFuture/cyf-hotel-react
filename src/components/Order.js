import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  //const pizzas = 0;
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li>
      {props.orderType}: {orders}
      {"\b"}
      <RestaurantButton add={orderOne} />
    </li>
  );
};
export default Order;
