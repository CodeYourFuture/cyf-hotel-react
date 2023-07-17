// import React from "react"

import Order from "./Order";


const Restaurant = () => {
  
  return (
    <div className="container">
      <h3>Restaurant Orders:</h3>
      <div>
        <Order orderType="Pizza" />
        <Order orderType="Pasta" />
        <Order orderType="Dessert" />
        <Order orderType="Drinks" />
      </div>
    </div>
  );
};

export default Restaurant;
