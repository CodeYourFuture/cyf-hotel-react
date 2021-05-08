import React from "react";
import RestaurantOrder from "./RestaurantOrder";
import "./Restaurant.css";

const Restaurant = () => {
  return (
    <section className="restaurant-section">
      <h3 className="text-center">Restaurant Orders</h3>
      <ul className="restaurant-orders collapse-list">
        <RestaurantOrder orderType="Pizzas" />
        <RestaurantOrder orderType="Salads" />
        <RestaurantOrder orderType="Chocolate cake" />
      </ul>
    </section>
  );
};

export default Restaurant;
