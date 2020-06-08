import React from "react";
import Order from "./Restaurant/Order";

const Restaurant = () => {
  return (
    <div className="container">
      <div className="restaurant">
        <h4>Restaurant Orders</h4>
      </div>
      <div className="pizzas">
        <ul>
          <Order orderType="Pizzas" />
          <Order orderType="Chocolate Cakes:" />
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
