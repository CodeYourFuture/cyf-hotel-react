import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order({ orderType }) {
  const [orderNumber, setOrderNumber] = useState(0);
  function orderOne() {
    setOrderNumber(orderNumber + 1);
  }
  return (
    <li className="order-info">
      <p className="order-type">
        {orderType}: {orderNumber}
      </p>
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
}
export default Order;
