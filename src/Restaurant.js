import React from "react";
// import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          <Order orderType="Pizzas" />
        </li>
        <li>
          <Order orderType="Salads" />
        </li>
        <li>
          <Order orderType="Chocolate cake" />
        </li>
        {/* <RestaurantButton orders={orderOne} /> */}
      </ul>
    </div>
  );
};

export default Restaurant;
