import React, { useState } from "react";
import Order from "./Order";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {/* <li>
          Pizzas: {orders} <RestaurantButton handleClick={orderOne} />
        </li> */}
        <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
