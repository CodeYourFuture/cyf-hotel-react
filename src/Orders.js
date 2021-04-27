import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Orders = props => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }

  return (
    <div>
      <li>
        {props.orderType}: {orders} <RestaurantButton handleClick={orderOne} />
      </li>
    </div>
  );
};

export default Orders;
