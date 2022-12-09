import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = () => {
  // const pizzas = 0;
  // const[order,setOrder]=useState(0)
  //   function orderOne(){
  // setOrder(order+1)
  //   };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul style={{ display: "flex" }}>
        <Order orderType="pizzas" />
        <Order orderType="salads" />
        <Order orderType="chocklate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
