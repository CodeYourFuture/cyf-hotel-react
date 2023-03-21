import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  // const render = () => {
  useEffect(() => {
    setIsLoadingData(
      true
    )
    console.log("Fetching information ...");
    fetch(`https://temporary-cyf-react.onrender.com/delayed`)
      .then((res) => res.json())
      .then((data) => { setBookings(data)
        setIsLoadingData(
      false
    )
  })
      .catch((er) => {
        console.log(er);
      });
  }, []);
  // };
  // render();

  const [bookings, setBookings] = useState([]);
  const [showFullList, setShowFullList] = useState(true);
  const [isLoadingData, setIsLoadingData] = useState(false);



  const search = (searchVal) => {
    console.info("TO DO!", searchVal);

    const filterBookings = bookings.filter(
      (booking) =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filterBookings);
   // setShowFullList(searchVal.length === 0);
  };

  return (
    <div className="App-content">
      {isLoadingData ? (
        <div>
          <p>Page is loading</p>
        </div>
      ) : (
        <div className="container">
          <Search search={search} />
          <SearchResults results={showFullList ? bookings : filterBookings} />
        </div>
      )}
    </div>
  );
};

export default Bookings;
