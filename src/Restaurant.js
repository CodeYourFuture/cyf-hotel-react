import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3 className="restaurant-heading">Restaurant Orders</h3>
      <ul>
        <Order orderType={"Pizza"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate Cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
