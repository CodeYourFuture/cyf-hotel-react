import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="restaurant-container">
      <div className="restaurant-sub-container">
        <h3 className="restaurant-title">Restaurant Orders</h3>
        <ul className="restaurant-list">
          <Order orderType="🍕 Pizza" />
          <Order orderType="🥗 Salads" />
          <Order orderType="🍰 Chocolate cake" />
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
