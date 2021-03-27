import React from "react";
import Button from "./Components/Button/Button";

const Order = props => {
  const [noOfPizza, pizzaOrderHandler] = React.useState(0);

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
    <li>
      {props.product}: {noOfPizza}
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
  );
};

export default Order;
