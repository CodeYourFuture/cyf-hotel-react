import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  //const pizzas = 0;
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}
          {"\b"}
          <RestaurantButton add={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
