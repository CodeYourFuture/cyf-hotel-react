import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(currentOrders => currentOrders + 1);
  }
  return (
    <div>
      <ul>
        <li>
          {orderType}: {orders}{" "}
        </li>
      </ul>
      <RestaurantButton handleOrder={orderOne} />
    </div>
  );
};

export default Order;
