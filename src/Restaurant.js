import React from "react";
import Order from "./Order";

const Restaurant = () => {
  const orderType = "Pizzas:";
  const orderTypeSalad = "Salads:";
  const orderTypeChoco = "Chocolate cake:";
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order typeOfOrder={orderType} />
        <Order typeOfOrder={orderTypeSalad} />
        <Order typeOfOrder={orderTypeChoco} />
      </ul>
    </div>
  );
};

export default Restaurant;
