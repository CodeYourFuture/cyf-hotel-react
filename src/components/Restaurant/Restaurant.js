import React from "react";

// Style
import { Wrapper } from "./Restaurant.styles";

const Restaurant = () => {
  const pizzas = 0;
  return (
    <Wrapper>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas} <button className="btn btn-primary">Add</button>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Restaurant;
