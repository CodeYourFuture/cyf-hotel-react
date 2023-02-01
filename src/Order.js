import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

export default function Order({ orderType }) {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <div>
      <li>
        {orderType}: {orders}
        <RestaurantButton onClick={orderOne} />
      </li>
    </div>
  );
}
