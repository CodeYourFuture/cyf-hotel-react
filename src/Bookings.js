import React, { useState, useEffect, useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BarLoader } from "react-spinners";
import { css } from "@emotion/react";

import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile.js";
import BookingForm from "./BookingForm.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [customerId, setCustomerId] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [profileOn, setProfileOn] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchBookings = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}bookings`
    );
    const data = await response.json();
    setBookings(data);
    setFilteredBookings(data);
    setLoaded(true);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleSearch = (data) => {
    setFilteredBookings(data);
  };

  const addBooking = async (booking) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(booking),
        }
      );

      if (response.ok) {
        fetchBookings();
      } else {
        // Handle error response
      }
    } catch (error) {}
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const FallbackUI = ({ error, resetErrorBoundary }) => (
    <div style={{ backgroundColor: "red", color: "white", padding: "1rem" }}>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Close</button>
    </div>
  );

  const memoizedCustomerProfile = useMemo(
    () => (
      <ErrorBoundary
        FallbackComponent={FallbackUI}
        onReset={() => {
          setHasError(false);
          setCustomerId(null);
        }}
      >
        <CustomerProfile
          customerId={customerId}
          isProfileOn={profileOn}
          setProfileOn={setProfileOn}
        />
      </ErrorBoundary>
    ),
    [customerId, profileOn, hasError]
  );

  return (
    <div className="App-content">
      <div className="container">
        <Search bookings={bookings} search={handleSearch} />
        {loaded ? (
          <SearchResults
            results={filteredBookings}
            setCustomerId={setCustomerId}
            setProfileOn={setProfileOn}
          />
        ) : (
          <div className="fallback-ui">
            <BarLoader css={override} color={"#36D7B7"} />
          </div>
        )}
        {customerId && memoizedCustomerProfile}
      </div>
      <div className="form__wrapper">
        <BookingForm addBooking={addBooking} index={bookings.length + 1} />
        <div className="form__photo"></div>
      </div>
    </div>
  );
};

export default Bookings;
