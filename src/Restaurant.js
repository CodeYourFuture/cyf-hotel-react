import React from "react";
import Order from "./Order";

// Renders restaurant orders, called by `App.js`.
const Restaurant = () => {
  return (
    <div className="d-flex justify-content-center orders-container">
      <div>
        <h2>Restaurant Orders</h2>
        <ul>
          <Order />
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
