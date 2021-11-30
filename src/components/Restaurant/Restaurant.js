import React, { useState } from "react";

// Style
import { Wrapper } from "./Restaurant.styles";

// Components
import SearchButton from "../SearchButton/index";

const Restaurant = () => {
  let [orders, setOrders] = useState("0");
  const orderOne = () => setOrders(orders + 1);

  return (
    <Wrapper>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders.length}{" "}
          <SearchButton text="Add" functionality={orderOne} />
        </li>
      </ul>
    </Wrapper>
  );
};

export default Restaurant;
