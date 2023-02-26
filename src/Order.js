import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton.js";

function Order({ orderType }) {
  const [orders, setOrder] = useState(0);

  function orderOne() {
    setOrder(orders + 1);
  }

  return (
    <li>
      {orderType}: {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
}
export default Order;
