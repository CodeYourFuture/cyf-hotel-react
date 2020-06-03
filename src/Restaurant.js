import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="orders">
      <h3>Restaurant Orders</h3>
      <ul className="food-orders">
        <li>
          <Order orderType="Pizzas" />
        </li>
        <li>
          <Order orderType="Salads" />
        </li>
        <li>
          <Order orderType="Chocolate Cake" />
        </li>
        {/* <li>
          Pizzas: {orders} <RestaurantButton order={orderOne}/>
        </li> */}
      </ul>
    </div>
  );
};

export default Restaurant;
