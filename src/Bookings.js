import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import AddBooking from "./AddBooking.js";
import { ThreeDots } from "react-loading-icons";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const search = searchVal => {
    let filteredBookings = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookings(filteredBookings);
  };
  //url:https://cyf-react.glitch.me
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://cyf-react.glitch.me");
      if (response.ok) {
        const jsonData = await response.json();
        setBookings(jsonData);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
        throw new Error("Network response was not ok.");
      }
    };
    fetchData().catch(console.error);
  }, []);
  const addNewBooking = newBooking => {
    setBookings([...bookings, newBooking]);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? (
          <ThreeDots stroke="#FFE61B" />
        ) : error ? (
          <div>
            {" "}
            <img
              src="https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png"
              width={"50px"}
            />{" "}
            <p className="text-danger">Network response was not ok!</p>
          </div>
        ) : (
          <SearchResults searchResults={bookings} />
        )}
        <AddBooking addNewBooking={addNewBooking} />
      </div>
    </div>
  );
};

export default Bookings;
