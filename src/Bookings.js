import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  const [bookings, setBookings] = useState(FakeBookings);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

// const Order = (props) => {
//   const [orders, setOrders] = useState(0);
//   return (
//     <li>
//     {/* Check this: https://reactjs.org/docs/hooks-state.html */}
//     {props.orderType}: {orders} <RestaurantButton action={orderOne} />
//     </li>
//   )

//   function orderOne() {
//     setOrders(orders + 1);
//   }
// }

// export default Order
