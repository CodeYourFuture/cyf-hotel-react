import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="container border-top py-5">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizza    " />
        <Order orderType="Salad    " />
        <Order orderType="Chocolate" />
      </ul>
    </div>
  );
};

export default Restaurant;
