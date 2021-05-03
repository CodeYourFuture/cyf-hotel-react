import React, { useState } from "react";
import RestaurantButton from "./components/RestaurantButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  //const pizzas = 0;

  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <RestaurantButton clickFunc={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
