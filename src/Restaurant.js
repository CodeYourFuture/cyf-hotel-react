import React, { useState } from "react";
import Button from "./Components/Button/Button";

const Restaurant = () => {
  const [noOfPizza, pizzaOrderHandler] = useState(0);

  const addPizzaHandler = e => {
    let updatedVal = noOfPizza + 1;
    pizzaOrderHandler(updatedVal);
  };
  const minusPizzaHandler = e => {
    if (noOfPizza === 0) return;
    let updatedVal = noOfPizza - 1;
    pizzaOrderHandler(updatedVal);
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {noOfPizza}
          <Button
            function={minusPizzaHandler}
            arrOfClasses={["btn", "btn-primary"]}
            inner={"-"}
          />
          <Button
            function={addPizzaHandler}
            arrOfClasses={["btn", "btn-primary"]}
            inner={"+"}
          />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
