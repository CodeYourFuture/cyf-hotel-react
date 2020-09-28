import React from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = ({ orderOne, orders }) => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orders={orders} orderType="Pizzas" />
        <Order orders={orders} orderType="Salads" />
        <Order orders={orders} orderType="Chocolate cake" />
        <li>
          <RestaurantButton addPizza={orderOne} />
          <RestaurantButton update={orderOne} />
          <RestaurantButton />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
