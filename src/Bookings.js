import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBookings from "/Users/test/Documents/CYF/react/cyf-hotel-react/src/data/fakeBookings.json";
import NewCustomerForm from "./NewCustomerForm.js";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  function handleAddNewBooking(name, lastName) {
    const newCustomer = {
      id: 6,
      title: "Madam",
      firstName: name,
      surname: lastName,
      email: "anu@selvam.net",
      roomId: 3,
      checkInDate: "2017-08-30",
      checkOutDate: "2017-10-02"
    };
    setBookings(bookings.concat(newCustomer));
  }

  const [bookings, setBookings] = useState(fakeBookings);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <NewCustomerForm handleAddNewBooking={handleAddNewBooking} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
