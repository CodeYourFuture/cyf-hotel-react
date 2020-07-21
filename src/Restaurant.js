import React from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";
import RestaurantStyle from "./RestaurantStyle.css";
const Restaurant = () => {
  return (
    <div className="restaurant-style">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
