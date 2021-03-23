import React from "react";

const Restaurant = () => {
  const pizzas = 0;
  return (
    <div className="text-center mt-3">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas} <button className="btn btn-dark">Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
