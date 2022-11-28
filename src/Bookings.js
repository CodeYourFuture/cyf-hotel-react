import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [customerList, setBookings] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);
  const search = searchVal => {
    let filteredList = customerList.filter(x => {
      return parseInt(searchVal)
        ? x.id === parseInt(searchVal)
        : x.firstName.toLowerCase() === searchVal.toLowerCase() ||
            x.surname.toLowerCase() === searchVal.toLowerCase();
    });
    setBookings(filteredList);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults customerObject={customerList} />
      </div>
    </div>
  );
};

export default Bookings;
