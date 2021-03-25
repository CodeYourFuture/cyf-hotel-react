import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  //  const orderTwo = () =>
  //  {
  //   setOrders(orders + 1);
  //  };

  //  const orderThree = () =>
  //  {
  //   setOrders(orders + 1);
  //  };
  return (
    <div>
      <li>
        Pizzas:0{props.Pizzas} <RestaurantButton handleClick={orderOne} />
      </li>
      <li>
        Salads:{props.Salads}
        <RestaurantButton handleClick={orderOne} />
      </li>
      <li>
        Chocolate Cake:{props.ChocolateCake}{" "}
        <RestaurantButton handleClick={orderOne} />
      </li>
    </div>
  );
};

export default Order;

// #### 13. Render more orders

//   ** Instructions:** Pass a new prop named`orderType` to the`<Order />` component with the value
// "Pizzas".Then render the`orderType` prop instead of "Pizzas" in the`<Order />` component.
// Make sure that "Pizzas" is still displayed on the screen.In the`<ul>` list of the`<Restaurant />`
// component, render 2 others`<Order />` components but this time pass different values for the
//   `orderType` prop: "Salads" and "Chocolate cake".

// ** Test:** For each order, the number of items can be incremented independently.
// Verify that you are able to explain what is happening.
