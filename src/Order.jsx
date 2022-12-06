import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton.jsx";

const Order = props => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }
  function removeItem() {
    setOrders(orders => {
      if (orders > 0) {
        return orders - 1;
      } else {
        return (orders = 0);
      }
    });
  }
  return (
    <li className="order-list">
      {props.orderType}: {orders}
      <RestaurantButton OrderNumber={orderOne} RemoveNumber={removeItem} />
    </li>
  );
};
export default Order;
