import React, { useState, useEffect } from "react";
import CustomerProfile from "./CustomerProfile.js";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = props => {
  const [bookings, setBookings] = useState([]);
  const [profileId, setProfileId] = useState();
  const [loading, setLoading] = useState(true);

  const onShowProfile = id => {
    setProfileId(id);
  };
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      /* fetch(`https://cyf-react.glitch.me/`) */
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        //delayed response
        setLoading(false);
      });
  }, [props.bookings]);
  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading...</p>
      </div>
    );
  }
  const search = searchVal => {
    const filterSearch = bookings.filter(
      nameInput =>
        nameInput.firstName.toLowerCase().includes(searchVal) ||
        nameInput.surname.toLowerCase().includes(searchVal)
    );
    setBookings(filterSearch);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} onShowProfile={onShowProfile} />
        <CustomerProfile profileId={profileId} />
      </div>
    </div>
  );
};

export default Bookings;
