import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Order = props => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders => orders + 1);
  }
  return (
    <div className="order-button">
      <li>
        {props.orderType}: {orders}{" "}
      </li>
      <div>
        <RestaurantButton handler={orderOne} />
      </div>
    </div>
  );
};
export default Order;
