import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton.js";

function Order({ orderType }) {
  const [orders, setOrder] = useState(null);

  function orderOne() {
    setOrder(orders + 1);
  }

  return (
    <ul>
    <li>
      <RestaurantButton orderOne={orderOne} />
       {orderType}: {orders}
    </li>
    </ul>
  );
}
export default Order;
