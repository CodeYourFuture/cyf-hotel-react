import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  
const orderTypes = ['Pizzas','Salads', 'Chocolate cake']

  return (
    <div>
      <h4>Restaurant Orders</h4>
      <ul>
        {orderTypes.map((orderType) => {
          return <li key={orderType}>
            <Order orderType={orderType} key={orderType}/>
          </li>
        })}
        {/* <Order orderType="Pizzas"/>
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" /> */}
      </ul>
    </div>
  );
};

export default Restaurant;


