import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./searchResults.js";

const Bookings = () => {
  let [bookingData, setBookingData] = useState([]);
  let [searchVal, setSearchVal] = useState("");
  let [pending, setPending] = useState(true);
  const [error, setError] = useState(null);
  const search = searchVal => {
    setSearchVal(searchVal);
    console.log(searchVal);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed") //use url: https://cyf-react.glitch.me/error to check for error catching
      .then(resp => {
        if (!resp.ok) {
          throw Error("Sorry! An error has occurred while getting data");
        }
        return resp.json();
      })
      .then(data => {
        setBookingData(data);
        setPending(false);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setPending(false);
      });
  }, []);
  return !pending ? (
    <div className="App-content">
      {error && <h3>{error}</h3>}
      <div className="container">
        <Search search={search} />
        <SearchResults FakeBookings={bookingData} searchVal={searchVal} />
      </div>
    </div>
  ) : (
    <h1>Please wait! Data is Loading in 5sec..........</h1>
  );
};

export default Bookings;
