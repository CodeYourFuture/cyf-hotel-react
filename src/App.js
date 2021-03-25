import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import "./App.css";

const contact = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading className="App" />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      {/* <SearchResults /> */}
      {/* <header className="App-header">CYF Hotel</header> */}
      <Footer address={contact} />
    </div>
  );
};

export default App;

//  ** Instructions:** In the`<Restaurant />` component, create a new function named `orderOne`.
//   The`orderOne` function doesn't take any parameters and should use the `setOrders` function to
// increment the`orders` state variable by 1. Then, add a`onClick` handler to the Add`<button>`
// that calls the`orderOne` function when it's being clicked.

// **Test:** Try to click on the Add button a few times and verify that the number
//  of pizzas increases accordingly.
