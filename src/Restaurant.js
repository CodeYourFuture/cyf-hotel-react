import React, { useState } from "react";
import Order from "./Order";

const Restaurant = props => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order
          orderType={props.Pizzas}
          orderType={props.Salads}
          orderType={props.ChocolateCake}
        />
      </ul>
    </div>
  );
};

export default Restaurant;

// / #### 13. Render more orders

//   ** Instructions:** Pass a new prop named`orderType` to the`<Order />` component with the value
// "Pizzas".Then render the`orderType` prop instead of "Pizzas" in the`<Order />` component.
// Make sure that "Pizzas" is still displayed on the screen.In the`<ul>` list of the`<Restaurant />`
// component, render 2 others`<Order />` components but this time pass different values for the
//   `orderType` prop: "Salads" and "Chocolate cake".

// ** Test:** For each order, the number of items can be incremented independently.
// Verify that you are able to explain what is happening.
