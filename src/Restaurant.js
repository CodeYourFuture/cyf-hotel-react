import React from "react";
import Orders from "./Orders";

export default function Restaurant() {
  return (
    <div className="container">
      <h3>Restaurant Orders:</h3>
      <ul>
        <Orders orderType="Pizzas" />
        <Orders orderType="Salads" />
        <Orders orderType="Chocolate cake" />
      </ul>
    </div>
  );
}
