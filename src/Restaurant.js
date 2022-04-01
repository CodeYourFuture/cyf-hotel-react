import React from "react";
import Order from "./Order";
const Restaurant = () => {
  return (
    <div className="restaurent-div">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={"Pizza"} />
      </ul>
      <ul>
        <Order orderType={"Salad"} />
      </ul>
      <ul>
        <Order orderType={"Cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
