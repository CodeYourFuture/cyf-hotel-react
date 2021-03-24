import React from "react";

import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="text-center mt-3">
      <h3 className="text-light bg-dark d-inline-block p-2 m-3 rounded">
        Restaurant Orders
      </h3>
      <ul>
        <Order orderType="Pizza" />
        <Order orderType="Salad" />
        <Order orderType="Pasta" />
        <Order orderType="Burger" />
      </ul>
    </div>
  );
};

export default Restaurant;
