import React from "react";
import Order from "./Order";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  return (
    <div>
      <h3> Restaurant Orders</h3>
      <ul>
        <Order food={"pizza"} />
        <Order food={"kebab"} />
        <Order food={"curry"} />
        <Order food={"dessert"} />
        <Order food={"drinks"} />
      </ul>
    </div>
  );
};
export default Restaurant;
