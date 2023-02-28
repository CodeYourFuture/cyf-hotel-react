import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
import FakeBookings from "./data/fakeBookings.json";

// **Instructions:** Instead of getting the existing bookings from the file `data/fakeBookings.json`, we will get and load the bookings from a remote API.
// In the `<Bookings />` component, use the React function `useEffect` to `console.log()` some text only when the page first renders on the screen.
// Verify that when you refresh the page, the text appears once in the console.
// Then, in the `useEffect` function, use the `fetch()` function to get data from `https://cyf-react.glitch.me`.

// **Hints:**

// - Replace `FakeBookings` in the bookings state and initialise it with `[]` (because we haven't fetched any results yet!)
// - After calling the `fetch()` function, use `.then()` to handle the response. Try looking at your Pokemon app that you worked on in class for an example
// - When the response comes back, use `setBookings` to update the results

// **Test:** Verify the customers data are still displayed correctly in the table.

const Bookings = () => {
  // const [bookings, setBookings] = useState(FakeBookings);
  // function allBookings() {
  //   setBookings(FakeBookings);
  // }
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    console.log("Fetching Booking information");
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => {
        setBookings(data);
      })
      .catch(error => {
        console.log(error);
      }, []);
    bookings ? <SearchResults results={bookings} /> : <span>Loading...</span>;
  });

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

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
