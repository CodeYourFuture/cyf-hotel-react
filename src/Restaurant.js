import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";
// let useState = React.useState;

const Restaurant = () => {
  const [order, setOrder] = useState(0);
  // const pizzas = 0;
  const orderOne = () => {
    setOrder(1);
  };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>Pizzas: {order}</li>
        <RestaurantButton handleClick={orderOne} />
      </ul>
    </div>
  );
};

export default Restaurant;
