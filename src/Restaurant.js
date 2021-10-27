import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="container border-top 3 ">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType=" Pizza " />
        <Order orderType=" Salad " />
        <Order orderType=" Chocolate cake " />
      </ul>
    </div>
  );
};

export default Restaurant;
