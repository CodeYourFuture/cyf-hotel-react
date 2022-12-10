import React, { useState } from "react";
import Orders from "./Orders";

const Restaurant = () => {
  return (
    <div className="restaurant1">
      <h3 className="restaurant">Restaurant Orders</h3>
      <ul className="restaurant-list">
        <Orders orderType="Pizzas" />
        <Orders orderType="Salads" />
        <Orders orderType="Choclate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
