import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([])
  const [searchData, setSearchData] = useState("")
  const search = searchVal => {
    setSearchData(searchVal.toLowerCase());
    // console.log("to do", searchVal)
    // setBookings(() =>
    //   bookings.filter(
    //     (booking) =>
    //       booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
    //       booking.surname.toLowerCase() === searchVal.toLowerCase()
    //   )
    // );
  };
   useEffect(() => {
     fetch(`https://cyf-react.glitch.me`)
       .then((res) => res.json())
       .then((data) => {
         setBookings(data);
       });
   }, []);
  const filteredSearch = bookings.filter((booking) =>
    `${booking.firstName} ${booking.surname}`
      .toLowerCase()
      .includes(searchData)
  );

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults
          results={filteredSearch}
        />
      </div>
    </div>
  );
};

export default Bookings;
