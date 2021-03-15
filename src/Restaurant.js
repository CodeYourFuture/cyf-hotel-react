import React from "react";
//import { useState } from "react";

const Restaurant = () => {
  const orders = 0;
  return (
    <div className="restaurant-orders">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Orders: {orders} <button className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
