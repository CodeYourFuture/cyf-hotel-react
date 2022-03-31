import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="text-center">
      <h4 className="font-weight-bold text-success">Restaurant Orders</h4>

      <div className="orderContainer">
        <ul className="orderList">
          {/* <div>
            <h1>this is a thing </h1>
          </div> */}
          <h3>
            {" "}
            <Order orderType="Pizza" />
          </h3>

          <h3>
            {" "}
            <Order orderType="Salad" />
          </h3>
          <h3>
            <Order orderType="Chocolate cake" />
          </h3>
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
