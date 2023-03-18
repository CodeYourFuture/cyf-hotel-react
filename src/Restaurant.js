import React from "react";
import Order from "./Order"


const Restaurant = () => {
  const pizzas = 0;

  return (
    <div  className="restaurant-container">
      <h3>Restaurant Orders</h3>
      <ul className="orderItems">


        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate Cake" />
      
      </ul>
    </div>

  );
};

export default Restaurant;
