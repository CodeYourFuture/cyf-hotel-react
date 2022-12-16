import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import FormBooking from "./FormBooking.js";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  const [bookings, setBookings] = useState(FakeBookings);
  const [title, setTitle] = useState("");
  function handleAddNewBooking(name) {
    const newClient = {
      id: 7,
      title: "Mr",
      firstName: name,
      surname: "Dagal",
      email: "anu@selvam.net",
      roomId: 3,
      checkInDate: "2017-08-30",
      checkOutDate: "2017-10-02"
    };
    const newClientAdded = bookings.concat(newClient);

    setBookings(newClientAdded);
  }
  const getBookings = () => {
    setBookings();
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
        <FormBooking handleAddNewBooking={handleAddNewBooking} />

        {/** this no make any difference since I imported the fake data from the json file in data folder in SearchResult file */}
      </div>
    </div>
  );
};

export default Bookings;
