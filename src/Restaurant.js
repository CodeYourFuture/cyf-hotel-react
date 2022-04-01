import React from "react";
import React, { useState } from "react";

const orders = 0;

function setOrders() {}

function orderOne() {}
// function ClickLogger() {
//   function logWhenClicked() {
//     console.log("Button was clicked!");
//   }

//   return <button onClick={logWhenClicked}>Click me!</button>;
// }

const Restaurant = () => {
  // const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
