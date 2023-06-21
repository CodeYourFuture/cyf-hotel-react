import React, { useState } from "react";
import RestaurantButton from "./components/RestaurantButton";

const Restaurant = () => {
  const [orders, setOrder] = useState(0);
  const orderOne = () => {
    setOrder(orders + 1);
  };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}
          <RestaurantButton add={orderOne}/>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
