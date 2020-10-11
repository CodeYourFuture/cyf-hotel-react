import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="container-fluid bg-danger p-5 d-flex justify-content-center align-items-center">
      <h3 className="m-5 text-light display-4">Restaurant Orders</h3>
      <ul className="m-5 d-flex flex-column justify-content-center">
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate"} />
      </ul>
    </div>
  );
};

export default Restaurant;
