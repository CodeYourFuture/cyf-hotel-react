import React from "react";
import { useState } from "react";

const Restaurant = () => {
  // const pizzas = 0;
  const [pizzas, setPizzas] = useState(0);
  const orderOne = () => {
    setPizzas(pizzas + 1);
  };
  const RestaurantButton = props => {
    return (
      <button className="btn btn-primary" onClick={props.pizzaFun}>
        Add
      </button>
    );
  };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas}
          <RestaurantButton pizzaFun={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
