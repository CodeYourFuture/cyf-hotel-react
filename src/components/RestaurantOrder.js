import React, { useState } from "react";
import RestaurantSumaButton from "./RestaurantSumaButton";
import RestaurantRestaButton from "./RestaurantRestaButton";
import "./RestaurantOrder.css";

const RestaurantOrder = props => {
  const pizzas = 0;
  const [currentOrders, setOrders] = useState(pizzas);

  function orderOne() {
    setOrders(currentOrders + 1);
  }

  function reduceOne() {
    if (currentOrders > 0) {
      setOrders(currentOrders - 1);
    }
  }

  return (
    <li className="d-flex justify-content-center align-items-center mt-1">
      <p>
        {props.orderType}: {currentOrders}
      </p>
      <RestaurantSumaButton orderOne={orderOne} />
      <RestaurantRestaButton reduceOne={reduceOne} />
    </li>
  );
};

export default RestaurantOrder;
