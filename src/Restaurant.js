import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="orders">
      <h3>Restaurant Orders</h3>
      <hr />
      <ul>
        <Order orderType="Pizza" />
        <Order orderType="Salad" />
        <Order orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
