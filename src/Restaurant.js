import RestaurantButton from "./Button";
import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3 className="text-center">Restaurant Orders</h3>
      <ul className="order-container">
        <Order orderType={"Pizza"} />
        {/* task-13 */}
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
