import React from "react";

import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3> Restaurant Orders</h3>
      <ul>
        <Order dish={"pizza"} />
        <Order dish={"Pasta"} />
        <Order dish={"Cack"} />
        <Order dish={"Drinks"} />
      </ul>
    </div>
  );
};

export default Restaurant;
