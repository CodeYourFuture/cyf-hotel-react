import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import Loading from "./Loading.js";
import BookingForm from "./BookingForm.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [seachBookings, setSeachBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // -- seach is passed to a child component and called from in the parent from the value in the child
  const search = searchVal => {
    setSeachBookings([...bookings]);
    //console.info("TO DO!", searchVal);
    console.log("TO DO!", typeof searchVal);
    console.log(searchVal === "all");
    //let bool  = searchVal;
    let term = "All";
    if (searchVal === "ALL") {
      setSeachBookings([...bookings]);
    } else {
      setSeachBookings(
        [...bookings].filter(
          ({ firstName, surname }) =>
            firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
            surname.toLowerCase().includes(searchVal.toLowerCase())
        )
      );
    }
  };

  const handleNewBooking = newBooking => {
    setBookings([...bookings, newBooking]);
    setSeachBookings([...bookings, newBooking]);
  };
  useEffect(() => {
    console.log("use working");

    fetch("https://cyf-olus-quote-server.glitch.me/bookings", { mode: "cors" })
      .then(res => res.json())
      .then(data => {
        if (data.error) setError(data.error);
        setBookings(data);
        setSeachBookings(data);
        console.log(data);
        console.log(bookings);

        setLoading(false);
      });
  }, []);
  if (loading) return <Loading />;
  if (error) return <h4 className="">{error}</h4>;
  return (
    <div className="App-content">
      <div className="container">
        <BookingForm newBooking={handleNewBooking} bookings={bookings} />
        <Search search={search} />
        <SearchResults results={seachBookings} bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
