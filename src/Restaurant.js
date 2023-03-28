import React, { useState } from "react";
import Order from "./Order";
import "./App.css";

const Restaurant = () => {
  return (
    <div className="orders">
      <h3>Restaurant Orders</h3>
      <div className="orders-container">
        <Order orderType="pizza" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </div>
    </div>
  );
};

export default Restaurant;
