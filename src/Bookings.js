import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Please wait the page is loading");
  const [bookings, setBookings] = useState([]);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(
      bookings.filter(
        customer =>
          customer.surname.toLowerCase().includes(searchVal) ||
          customer.firstName.toLowerCase().includes(searchVal)
      )
    );
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => {
        if (!res) {
          throw Error("Oops Something Is Wrong!");
        }
        return res.json();
      })
      .then(data => {
        setLoading(true);
        setBookings(data);
      })
      .catch(error => {
        console.log(error);
        setMessage("Something went wrong");
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? <SearchResults results={bookings} /> : <p>{message}</p>}
      </div>
    </div>
  );
};

export default Bookings;
