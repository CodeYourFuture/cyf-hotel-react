import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

export default function Order({ orderType }) {
  const [orders, setOrder] = useState(0);
  const orderOne = () => setOrder(orders + 1);

  return (
    <li>
      {orderType} : {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
}
