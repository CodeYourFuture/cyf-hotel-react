import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [order, setOrder] = useState(0);

  const orderOne = () => {
    return setOrder(order + 1);
  };

  return (
    <div className="container">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {order} <RestaurantButton onClick={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
