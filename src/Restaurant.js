import React, { useState } from "react";
import Order from "./Order";
import "./Restaurant";
const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          listStyle: "none"
        }}
      >
        <li>
          {" "}
          <Order orderType="pizza" />{" "}
        </li>

        <li>
          <Order orderType="salad" />
        </li>
        <li>
          {" "}
          <Order orderType="cake" />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
