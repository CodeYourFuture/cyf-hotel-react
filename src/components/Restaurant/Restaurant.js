import React from "react";

// Style
import { Wrapper } from "./Restaurant.styles";

// Components
import Order from "../Order/Order";

const Restaurant = () => {
  return (
    <Wrapper>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </Wrapper>
  );
};

export default Restaurant;
