import React from "react";

const Restaurant = () => {
  const pizzas = 0;
  return (
    <div className="app-content container text-center">
      <h3>Restaurant Orders</h3>
      <ul className="container">
        <li>
          Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
