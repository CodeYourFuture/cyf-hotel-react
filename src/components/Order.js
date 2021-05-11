import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order(props) {
  const [orders, setOrders] = useState(0);
  //const pizzas = 0;

  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li className="list-group-item">
      <RestaurantButton clickFunc={orderOne} />
      {props.orderType}: {orders}
    </li>
  );
}

export default Order;
