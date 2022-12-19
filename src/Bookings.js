import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";
import FormBooking from "./FormBooking.js";
import { First } from "react-bootstrap/esm/PageItem.js";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = ({ errorMessage }) => {
  const [bookings, setBookings] = useState();
  const [isHiden, setIsHiden] = useState(true);

  const [profile, setProfile] = useState("");

  const toggleProfile = () => {
    setIsHiden(isHiden => !isHiden);
  };

  const showProfile = details => {
    toggleProfile();

    setProfile(details);
  };

  const search = searchVal => {
    setBookings(
      bookings.filter(
        value =>
          value.firstName.toLowerCase() === searchVal.toLowerCase() ||
          value.surname.toLowerCase() === searchVal.toLowerCase() ||
          value.roomId === Number(searchVal) ||
          value.id === Number(searchVal)
      )
    );

    console.log("TO DO!", searchVal);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => response.json())
      .then(data => setBookings(data));
  }, []);

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

  return (
    <div className="App-content">
      {bookings ? (
        <div className="container">
          <Search search={search} />
          <SearchResults
            showProfile={showProfile}
            toggleProfile={toggleProfile}
            bookings={bookings}
          />
          <CustomerProfile profile={profile} isHiden={isHiden} />
          <FormBooking handleAddNewBooking={handleAddNewBooking} />
          {/** this no make any difference since I imported the fake data from the json file in data folder in SearchResult file */}
        </div>
      ) : (
        <span>Loading....</span>
      )}
    </div>
  );
};

export default Bookings;
