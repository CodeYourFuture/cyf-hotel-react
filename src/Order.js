import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Order = props => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(order => {
      return order + 1;
    });
  }
  return (
    <li className="order-list">
      {props.orderType}: {orders}
      <RestaurantButton OrderNumber={orderOne} />
    </li>
  );
};
export default Order;
