import React, { Component } from "react";
import React from "react";
import Button from "./Button";
const Restaurant = () => {
  const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas} <Button name="Add" />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
