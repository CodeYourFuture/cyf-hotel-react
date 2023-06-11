import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  // array destructuring
  // setOrders is a function that allows me to modify the value of the orders variable
  // 0 is the initial value
  const [orders, setOrders] = useState(0);

  function OrderOne() {
    setOrders(orders + 1);
  }

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <RestaurantButton OrderOne={OrderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
