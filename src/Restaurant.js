import React from "react";
import Order from "./Order";
import "./App.css";

const Restaurant = () => {
  return (
    <div className="restaurand-order row">
      <h3>Restaurant Orders</h3>
      <div className="orders col-12 lg-col-12">
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </div>
    </div>
  );
};

export default Restaurant;
