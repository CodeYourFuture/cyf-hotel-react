import React from "react";
//import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="rest-div">
      <h3>Restaurant Orders</h3>
      <ul className="list-tag">
        <li>
          <Order orderType="Pizzas" />
        </li>
        <li>
          <Order orderType="Salads" />
        </li>
        <li>
          <Order orderType="Chocolate Cake" />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
