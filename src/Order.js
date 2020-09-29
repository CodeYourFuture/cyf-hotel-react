import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <div>
      <li>
        Pizzas Order(s): {orders} <RestaurantButton pizzaOrder={orderOne} />
      </li>
    </div>
  );
};

export default Order;

// #### 12. Extract pizza order to its own Order component

// **Instructions:** Extract the `<li>` containing "Pizzas" from the `<Restaurant />` component to a new component named `Order`. Also, move the declaration of the `orders` state and the `orderOne` function from the `<Restaurant />` component to the new `<Order />` component. Use the `<Order />` component in the `<ul>` list of the `<Restaurant />` component.

// **Test:** Make sure the pizza order is still rendered on the page and that clicking on the "Add" button still increments the number of orders.
