import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

export default function Order(props) {
  const [orders, setOrders] = useState(0);
  const pizzas = 0;
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <div>
      <li>
        <RestaurantButton order={orderOne} />
        {props.orderType}: {orders}{" "}
      </li>
    </div>
  );
}
