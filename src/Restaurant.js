import React from "react";
import Order from "./Order.js";

const Restaurant = () => {
  return (
    <div className="list-group text-center">
      <h3>Restaurant Orders</h3>
      <ul className="list">
        <Order orderType="Pizzas" />
        <Order orderType="Chocolate cake" />
        <Order orderType="Salads" />
      </ul>
    </div>
  );
};

export default Restaurant;

// It is a React component called Restaurant. It imports the React library and the Order component
// from a file named "Order.js". The Restaurant component is a functional component defined as an arrow function. It
// returns JSX (a syntax extension for JavaScript that resembles HTML) representing the structure and content of the
// component's output. The JSX returned by the Restaurant component consists of a <div> element with the className
// "list-group text-center". Inside the <div>, there is an <h3> element with the text "Restaurant Orders". Below the
// <h3>, there is an <ul> element with the className "list". Inside the <ul>, there are three instances of the <Order>
// component. Each <Order> component has a prop called orderType set to a specific value. The first <Order> component
// has orderType="Pizzas", the second one has orderType="Chocolate cake", and the third one has orderType="Salads". The
// purpose of these props is to pass data from the Restaurant component to the Order component.The Restaurant component
//  is exported as the default export, which means it can be imported and used in other files. Other files can import
// the Restaurant component using import Restaurant from "./Restaurant.js", assuming the file is in the same directory.
