import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>

      <Order orderType="Pizza" />
    </div>
  );
};

export default Restaurant;
