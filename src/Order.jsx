import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  let [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <div>
      <li>
        {props.orderType} {orders} <RestaurantButton increment={orderOne} />
      </li>
    </div>
  );
};

export default Order;
