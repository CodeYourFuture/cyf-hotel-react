import React from "react";
// import { useState } from 'react';
// import RestaurantButton from './RestaurantButton';
import Order from "./Order";

const Restaurant = ({ orders, orderOne, onClick }) => {
  return (
    <div className="text-center">
      <h3>Restaurant Orders</h3>
      <ul className="list-unstyled ">
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
//Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
