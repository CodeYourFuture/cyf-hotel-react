import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("this is a test");
    const url = "https://cyf-react.glitch.me/delayed";
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        return setBookings(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    // setBookings(
    const y = bookings.filter(
      (x) => searchVal === x.firstName || searchVal === x.surname
    );
    console.log(y);
    setBookings(y);
    // );
  };
  // setBookings((bookings) => {
  //   bookings = FakeBookings;
  // });
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? (  <h2 className="loading"> Loading ..... </h2>) : (<SearchResults results={bookings} /> )}
      </div>
    </div>
  );
};

export default Bookings;
