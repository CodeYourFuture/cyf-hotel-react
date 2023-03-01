import React from "react";
import Order from "./Order"

const Restaurant = () => {

  return (
    <div className="restaurantOrders">
      <h3>Restaurant Orders</h3>
      <ul>
      <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
