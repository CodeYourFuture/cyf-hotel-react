import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

// #### 19. Implementing the search functionality

// **Instructions:** Still in the `<Bookings />` component, implement the `search` method. It must use the `searchVal` variable (that you just passed from the `<Search />` component) to **filter** the search results. The filter function should return bookings where `firstName` or `surname` match `searchVal`. Once filtered, use the `setBookings` function to update the results rendered in `<SearchResults />`.

// **Test:** Verify that when you enter an existing first name or surname and submit the form, the results are filtered accordingly in the customers table.

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const [reset, setReset] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setReset(data);
      });
  }, []);

  const search = (searchVal) => {
    // console.log(bookings[0].firstName);
    const filterSearch = bookings.filter(function (bookings) {
      return bookings.firstName == searchVal || bookings.surname == searchVal;

      //   console.log(bookings.firstName)
      // console.log(filterSearch)
      // return setBookings(filterSearch);
    });

    setBookings(filterSearch);
    // console.log("this worked");
    // console.info("TO DO!", searchVal);
  };

  const resetHandler = () => {
    console.log(reset);

    return setBookings(reset);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults results={bookings} />
        <button onClick={resetHandler}> Reset</button>
      </div>
    </div>
  );
};

export default Bookings;
