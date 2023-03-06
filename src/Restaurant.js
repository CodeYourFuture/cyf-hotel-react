import React from "react";
import { Order } from "./Order";

const Restaurant = () => {
  return (
    <div className="container">
      <h3 className="text-left">Restaurant Orders</h3>
      <ul className="order-list">
        <Order orderType="Pizza" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
