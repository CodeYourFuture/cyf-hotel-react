import React from "react";

// Style
import { Wrapper } from "./Restaurant.styles";

// Components
import SearchButton from "../SearchButton/index";

const Restaurant = () => {
  const pizzas = 0;
  return (
    <Wrapper>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {pizzas} <SearchButton text="Add" />
        </li>
      </ul>
    </Wrapper>
  );
};

export default Restaurant;
