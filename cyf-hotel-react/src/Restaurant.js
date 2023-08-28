import React from "react";
import Order from "./Order";

const Restaurant = (props) => {
  
  return (
    <div>
      <h3 className="restaurantOrder">Restaurant Orders</h3>
      <ul>
      <Order orderType="Pizzas"/>
      <Order orderType="Salad"/>
      <Order orderType="Chocolate Cake"/>
      </ul>
    </div>
  );
};

export default Restaurant;

