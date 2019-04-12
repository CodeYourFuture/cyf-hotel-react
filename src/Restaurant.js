import React from "react";
import Button from './Button'

const Restaurant = () => {
  const pizzas = 0;
  return (
    <div class='container'>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas} <Button content='Add' />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
