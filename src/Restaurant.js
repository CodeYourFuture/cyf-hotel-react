import React, { useState } from "react";
import RestaurantButton from "./Lesson1/RestaurantButton";
import Order from "./Lesson1/Order";
const Restaurant = () => {
  // const[order,setOrder]= useState(0)
  // function orderOne(){
  //   setOrder(order+1)
  // };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order key={1} OrderType={"pizzas"} />
        <Order key={2} OrderType={"salads"} />
        <Order key={3} OrderType={"chocolate cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
