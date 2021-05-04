import React, { useState, useEffect } from "react";
import "./Bookings.css";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="bookings">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

// import React from "react";
// import "./Bookings.css";
// import Search from "./Search.js";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "../data/fakeBookings.json";

// const Bookings = () => {
//   const search = (searchVal) => {
//     console.info("TO DO!", searchVal);
//   };

//   return (
//     <div className="bookings-content">
//       <div className="container">
//         <Search search={search} />
//         <SearchResults results={FakeBookings} />
//       </div>
//     </div>
//   );
// };

// export default Bookings;
