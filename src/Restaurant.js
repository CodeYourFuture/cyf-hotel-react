import React from "react";

const Restaurant = () => {
  const pizzas = 0;
  return (
    <div className="center">
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
