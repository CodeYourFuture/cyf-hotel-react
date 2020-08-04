import React from "react";
import Order from "./Order";
import RestaurantButton from "./RestaurantButton";

const Restaurant = props => {
  return (
    <div className="restaraunt">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
