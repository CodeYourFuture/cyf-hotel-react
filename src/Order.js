import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order(props) {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li className="list-unstyled">
      {props.orderType}: {orders} <RestaurantButton handlerClick={orderOne} />
    </li>
  );
}

export default Order;
