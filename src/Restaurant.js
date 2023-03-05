import React, {useState} from "react";
import RestaurantButton from "./RestaurantButton";
import Orders from "./Order";
// const [Orders,setOrder]= useState(0);

// function orderOne(){
// setOrder(Orders +1)
 
// };

const Restaurant = () => {
  // const pizzas = 0;
  
  
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
       <Orders orderType="Pizzas"/>
       <Orders orderType="Salads"/>
       <Orders orderType="Chocolate cake"/>
      </ul>
    </div>
  );
 };
  
export default Restaurant;
