import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="list-group text-center">
      <h3>Restaurant Orders</h3>
      <ul className="list">
        <Order orderType="Pizza" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};
export default Restaurant;
