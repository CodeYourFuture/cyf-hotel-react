import React from "react";

const Restaurant = () => {
  const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          <div>
          Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
