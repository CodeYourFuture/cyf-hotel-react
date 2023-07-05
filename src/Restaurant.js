import React, { useState } from "react";
import RestaurantButton from "./components/RestaurantButton"

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}
          <RestaurantButton button={orderOne}/>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
