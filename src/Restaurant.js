import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="restairant">
      <h3>Restaurant Orders</h3>
      <div className="order">
        <div>
          <Order orderType="Pizzas" />
        </div>
        <div>
          <Order orderType="Salads" />
        </div>
        <div>
          <Order orderType="Chocolate cake" />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
