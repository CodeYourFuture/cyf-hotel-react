import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="orders">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orders={Order} orderType={"Pizzas"} />
        <Order orders={Order} orderType={"Salads"} />
        <Order orders={Order} orderType={"Chocolate cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
