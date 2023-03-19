import React,{useState} from "react";
import RestaurantBtn from "./RestaurantButton";
import Order from "./Order";

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
