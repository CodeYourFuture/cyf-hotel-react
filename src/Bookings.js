import React, { useState, useEffect } from "react";
import CustomerProfile from "./CustomerProfile.js";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = props => {
  const [bookings, setBookings] = useState([]);
  const [profileId, setProfileId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const onShowProfile = id => {
    setProfileId(id);
  };

  const resetCustomerProfileId = () => {
    setProfileId(null);
  };

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await fetch("https://cyf-react.glitch.me/delayed");
      /* fetch(`https://cyf-react.glitch.me/error`) */

      if (res.ok) {
        const data = await res.json();
        setBookings(data);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    };

    fetchBookings();
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
  if (error) {
    return (
      <div className="centered">
        <h1>500 Server Error</h1>
        <p>It's broken, but it's not your fault!</p>
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
        {profileId !== null && (
          <CustomerProfile
            profileId={profileId}
            resetCustomerProfileId={resetCustomerProfileId}
          />
        )}
      </div>
    </div>
  );
};

export default Bookings;
