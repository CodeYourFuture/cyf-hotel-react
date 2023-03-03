import React,{useState} from "react";
import RestaurantBtn from "./resturantBtn";
import Order from "./order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="pizzas"/>
        <Order orderType="salad"/>
        <Order orderType="chocolate"/>
      </ul>
    </div>
  );
};

export default Restaurant;
