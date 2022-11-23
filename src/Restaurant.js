import React from "react";
import { useState } from "react";
import "./App.css";

const Restaurant = () => {
  // const pizzas = 0;

  const RestaurantButton = props => {
    return (
      <button className="btn btn-primary" onClick={props.pizzaFun}>
        Add
      </button>
    );
  };
  const Order = props => {
    const [pizzas, setPizzas] = useState(0);
    const orderOne = () => {
      setPizzas(pizzas + 1);
    };
    return (
      <li className="orderType">
        {props.orderType}: {pizzas}
        <RestaurantButton pizzaFun={orderOne} />
      </li>
    );
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salad"} />
        <Order orderType={"Chocolate cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
