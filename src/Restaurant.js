import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = () => {
  const [order, setOrder] = useState(0);

  function orderOne() {
    setOrder(order + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="pizza" />
        <Order orderType="Salad" />
        <Order orderType="Chocolate" />
      </ul>
    </div>
  );
};

export default Restaurant;
