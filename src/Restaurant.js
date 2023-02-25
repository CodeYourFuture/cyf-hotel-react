import React from "react";

const Restaurant = () => {
  const pizzas = 0;
  return (
    <div>
      <h4>Restaurant Orders</h4>
      <ul>
        <li>
          Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
