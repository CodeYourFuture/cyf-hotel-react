import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";


// **Hints:**

// - Replace `FakeBookings` in the bookings state and initialise it with `[]` (because we haven't fetched any results yet!)
// - After calling the `fetch()` function, use `.then()` to handle the response. Try looking at your Pokemon app that you worked on in class for an example
// - When the response comes back, use `setBookings` to update the results

// **Test:** Verify the customers data are still displayed correctly in the table.


const Bookings = () => {
  const [bookings, setBookings] = useState([]); 
  
useEffect(() => {
 console.log("hello there", useEffect);

 fetch(`https://cyf-react.glitch.me`)
   .then((res) => res.json())
   .then((data) => {
    console.log(data);
     setBookings(data);
   });

}, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults results={[]} />
      </div>
    </div>
  );
};

export default Bookings;


