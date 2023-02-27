import React from "react";

const Restaurant = () => {
  const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      
        <ul className="list">
          <Order orderType="Pizza" />
          <Order orderType="Salads" />
          <Order orderType="Chocolate cake" />
        </ul>
      
    </div>
  );
};

export default Restaurant;
