import React from "react";
import Order from "./Order";

const Restaurant = () => {

  return (
    <div>
      <h3 className="order-head">Restaurant Orders</h3>
      <div className="order-type">
      <Order orderType="Pizzas" />
      <Order orderType="Burgers" />
      <Order orderType="HotDogs" />
      <Order orderType="Drinks" />
      </div>
    </div>
  );
};

export default Restaurant;
