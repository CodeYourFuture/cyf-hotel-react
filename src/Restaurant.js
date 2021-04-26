import React from "react";
import Order from "./Order";
const Restaurant = () => {
  return (
    <div
      style={{ textAlign: "center", left: "50%", border: "10px solid green" }}
    >
      <h3>Restaurant Orders</h3>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          left: "30%",
          justifyContent: "space-around"
        }}
      >
        <Order orderType="pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
