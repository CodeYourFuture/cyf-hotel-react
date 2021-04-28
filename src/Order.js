import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const pizzas = 0;
  const [currentOrders, setOrders] = useState(pizzas);

  function orderOne() {
    setOrders(currentOrders + 1);
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <p>
        {props.orderType}: {currentOrders}
      </p>
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
