import React, { useState } from "react";

import Order from "./Order";
const Restaurant = () => {
  return (
    <div className="orders container">
      <h3>Restaurant Orders</h3>
      <ul className="list-orders">
        <Order orderType={"Pizza"} />
        <Order orderType={"Salad"} />
        <Order orderType={"Chocolate Cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
