import React from "react";
import Order from "./Order.js";

const Restaurant = () => {
  const orderTypes = ["Pizzas", "Chocolate cake", "Salads"];

  return (
    <div className="list-group text-center">
      <h3>Restaurant Orders</h3>
      {orderTypes.map((orderType, index) => (
        <Order key={index} orderType={orderType} />
      ))}
    </div>
  );
};

export default Restaurant;

// It is a a React component called Restaurant that renders a list of orders for a restaurant. The
// component imports the Order component from the "./Order.js" file. Inside the Restaurant
// component, an array orderTypes is defined, which contains the different types of orders
// available in the restaurant, such as "Pizzas", "Chocolate cake", and "Salads". The component
// renders a <div> element with the CSS class "list-group text-center". Inside the <div>, there is
// an <h3> element displaying the heading "Restaurant Orders". To render the list of orders, the
// component uses the orderTypes.map() function, which iterates over each element in the
// orderTypes array. For each orderType, it creates an instance of the Order component, passing
// the orderType as a prop. The key prop is assigned the index value to provide a unique identifier
// for each order. By mapping over the orderTypes array and rendering an Order component for each
// order type, the Restaurant component dynamically generates the list of orders based on the orderTypes
// array. Finally, the Restaurant component is exported as the default export, allowing it to be
// imported and used in other parts of the application.
