import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    // console.log("Some Text");
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

// const [bookings, setBookings] = useState([]);
//   useEffect(() => {
//     fetch(`https://cyf-react.glitch.me//`)
//       .then((res) => res.json())
//       .then((data) => setBookings(data));

//     console.log("Some Text");
//   }, [props.id]);
