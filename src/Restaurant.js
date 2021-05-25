import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-6 offset-md-3">
          <h3 className="text-center">Restaurant Orders</h3>
          <ul className="list-group">
            <Order orderType="Pizzas" />
            <Order orderType="Salads" />
            <Order orderType="Chocolate cake" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
