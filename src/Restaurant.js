import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="restaurant">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={["Salads", "Pizza", "Chocolate cake"]} />
      </ul>
    </div>
  );
};

export default Restaurant;
