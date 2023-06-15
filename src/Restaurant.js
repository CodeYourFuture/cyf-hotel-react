import React from "react";

import "./Restaurant.css";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="Restaurant">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
