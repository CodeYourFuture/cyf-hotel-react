import React from "react";

const Restaurant = () => {
  const pizzas = 0;
  return (
    <div className="restaurant-wrapper">
      <h3 className="restaurant-title">Restaurant Orders</h3>
      <ul>
        <li className="restaurant-li">
          <p>Pizzas: {pizzas}</p>{" "}
          <button className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
