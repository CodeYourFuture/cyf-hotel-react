import React from "react";

import Order from "./Order";

const Restaurant = () => {
  return (
    // <div>
    //   <h3>Restaurant Orders</h3>
    //   <ul>
    //     <Order orderType="Pizzas" />
    //     <Order orderType="Salads" />
    //     <Order orderType="Chocolate" />
    //   </ul>
    // </div>
    <div className="container my-4">
      <div className="row1">
        <div className="col-md-6 col-lg-8 offset-lg-2">
          <h3 className="row-h3">Restaurant Orders</h3>
          <ul className="list-group">
            <Order orderType="Pizzas" />
            <Order orderType="Salads" />
            <Order orderType="Chocolate" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
