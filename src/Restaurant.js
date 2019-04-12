import React from "react";

const Restaurant = (props) => {
  const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas} <button className="btn btn-primary">{props.text}</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
