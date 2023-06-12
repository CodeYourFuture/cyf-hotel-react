import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import "./Restaurant.css";
const Restaurant = () => {
  // array destructuring
  // setOrders is a function that allows me to modify the value of the orders variable
  // 0 is the initial value
  const [orderCount, setOrderCount] = useState(0);

  function orderOne() {
    setOrderCount((orderCount) => {
      return orderCount + 1;
    });
  }

  return (
    <div className="Restaurant">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orderCount} <RestaurantButton orderOne={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
