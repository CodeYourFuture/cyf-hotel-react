import React, { useState } from "react";
import Orders from "./Orders";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <Orders orderType={"Pizzas"} />
      <Orders orderType={"Salad"} />
      <Orders orderType={"Chocolate Cake"} />
    </div>
  );
};

export default Restaurant;
