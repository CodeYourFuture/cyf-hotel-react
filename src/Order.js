import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order(props) {
  // const pizzas = 0;
  const [orders, setOrders] = useState(0);
  // increment orders by 1
  function orderOne() {
    setOrders(orders + 1);
  }

  return (
    <li>
      {/* pass function as props to RestaurantButton component */}
      {props.orderType}: {orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
}

export default Order;
