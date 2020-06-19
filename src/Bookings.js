import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import AddNew from "./AddNew";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [original, setOriginal] = useState();
  const [sort, setSort] = useState(false);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setOriginal(data);
      });
  }, []);
  if (!bookings) {
    return (
      <div>
        <img alt="loding" src="https://i.gifer.com/HJkK.gif" />
      </div>
    );
  }

  const updateData = newObj => {
    const formData = {
      ...newObj,
      id: bookings.length + 1
    };
    setBookings([...bookings, formData]);
  };

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const searchBooking = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(searchBooking);
  };

  //sort part
  const sortByDate = () => {
    setSort(!sort);
    sort ? assendi() : dessendi();
  };
  const sortSureName = () => {
    setSort(!sort);
    sort ? assendi() : dessendi();
  };

  const sortByRoomId = () => {
    setSort(!sort);
    sort
      ? bookings.sort((a, b) => a.roomId - b.roomId)
      : bookings.sort((a, b) => b.roomId - a.roomId);
  };

  const sortByFirstName = () => {
    setSort(!sort);
    sort ? assendi() : dessendi();
  };

  const assendi = () => {
    bookings.sort(function(a, b) {
      if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
        return -1;
      }
      return -1;
    });
  };
  const dessendi = () => {
    bookings.sort(function(a, b) {
      if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
        return -1;
      }
    });
  };

  return (
    <div className="App-content">
      <div className="container">
        <AddNew updateData={updateData} />
        <Search
          search={search}
          bookings={bookings}
          setBookings={setBookings}
          original={original}
        />
        <SearchResults
          data={bookings}
          sortByFirstName={sortByFirstName}
          sortByRoomId={sortByRoomId}
          sortSureName={sortSureName}
          sortByDate={sortByDate}
        />
      </div>
    </div>
  );
};
export default Bookings;
