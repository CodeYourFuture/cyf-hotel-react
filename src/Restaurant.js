import React from "react";

// renders restaurant orders, called by `App.js`.
const Restaurant = () => {
  const pizzas = 0;
  return (
    <div className="d-flex justify-content-center orders-container">
      <div>
        <h2>Restaurant Orders</h2>
        <ul>
          <li>
            Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
