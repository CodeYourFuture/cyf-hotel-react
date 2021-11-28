import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order(props) {
  const [order, setOrders] = useState(0);
  const orderOne = event => {
    event.preventDefault();
    setOrders(order => order + 1);
  };

  return (
    <li className="list-unstyled">
      {props.orderType}: {order} <RestaurantButton handlerClick={orderOne} />
    </li>
  );
}

export default Order;
