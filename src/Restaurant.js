import React, { useState } from "react";

import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order product={"Pizza"} />
        <Order product={"Salads"} />
        <Order product={"Chocolate cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
