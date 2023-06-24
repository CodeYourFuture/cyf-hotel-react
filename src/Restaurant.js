import React, { useState } from "react";
import RestaurantButton from './RestaurantButton';
import Order from './Order';
import './App.css';
const Restaurant = () => {
  // const pizzas = 0;
  // const [orders, setOrders] = useState(0);

  // const orderOne = () => {
  //   setOrders(orders + 1);
  // };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
      
        {/* <p>
          Pizzas: {orders} <RestaurantButton  onClick={orderOne} />
        </p> */}
    </div>
  );
};

export default Restaurant;
