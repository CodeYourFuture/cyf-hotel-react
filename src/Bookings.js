import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";
import { useState, useEffect } from "react";

const Bookings = () => {
  //const [bookings, setBookings] = useState(FakeBookings);
  const [bookings, setBookings] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    const getBookings = async () => {
      const bookingsFromServer = await fetchBookings();
      setBookings(bookingsFromServer);
      setLoading(false);
    };
    getBookings();
  }, []);

  const fetchBookings = async () => {
    const res = await fetch("https://cyf-react.glitch.me.");
    //const res = await fetch("https://cyf-react.glitch.me/error");
    if (res.status !== 200) {
      setErrorMessage(true);
    } else {
      const data = await res.json();

      return data;
    }
  };

  const search = searchVal => {
    setQuery(searchVal);
  };

  const filterSearch = bookings => {
    return bookings.filter(
      item =>
        item.firstName.toLowerCase().includes(query.toLowerCase()) ||
        item.surname.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="App-content container-fluid">
      <div className="container-fluid">
        <Search search={search} />
        <p />
        {errorMessage ? (
          <p>Something went wrong...</p>
        ) : loading ? (
          <p>Data is loading...</p>
        ) : (
          <SearchResults results={filterSearch(bookings)} />
        )}
        {/* <SearchResults results={FakeBookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;
