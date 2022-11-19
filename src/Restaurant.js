import React from "react";
import { useState } from "react";

const Restaurant = () => {
  // const pizzas = 0;

  const RestaurantButton = props => {
    return (
      <button className="btn btn-primary" onClick={props.pizzaFun}>
        Add
      </button>
    );
  };
  const Order = () => {
    const [pizzas, setPizzas] = useState(0);
    const orderOne = () => {
      setPizzas(pizzas + 1);
    };
    return (
      <li>
        Pizzas: {pizzas}
        <RestaurantButton pizzaFun={orderOne} />
      </li>
    );
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
