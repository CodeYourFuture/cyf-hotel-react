import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
// import FakeBookings from "./data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile";

const Bookings = () => {
  const search = searchVal => {
    // console.info("TO DO!", searchVal);
    const filteredNames = bookings.filter(booking => {
      return (
        booking.firstName.toUpperCase().includes(searchVal.toUpperCase()) ||
        booking.surname.toUpperCase().includes(searchVal.toUpperCase())
      );
    });
    setBookings(filteredNames);
  };
  const [bookings, setBookings] = useState([]);
  const [customerId, setCustomerId] = useState();
  const [loading, setLoading] = useState(true);

  function handleProfile(e) {
    setCustomerId(e.target.id);
    // console.log(e.target.id);
  }
  useEffect(() => {
    // console.log("Some Text");
    // fetch("https://cyf-react.glitch.me")
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading && (
          <div>
            <button class="btn btn-primary" type="button" disabled>
              <span
                class="spinner-border spinner-border-sm "
                role="status"
                aria-hidden="true"
              />
              Loading...
            </button>{" "}
          </div>
        )}
        <SearchResults bookings={bookings} handleProfile={handleProfile} />
        <CustomerProfile customerId={customerId} />
      </div>
    </div>
  );
};

export default Bookings;
