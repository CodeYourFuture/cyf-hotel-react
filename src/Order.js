import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function test() {
  console.log();
}

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
    console.log([orders, setOrders]);
  }

  return (
    <li>
      {orderType}: {orders} <RestaurantButton onClick={orderOne} />
    </li>
  );
};

export default Order;
