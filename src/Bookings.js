import React, { useState, useEffect, useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BarLoader } from "react-spinners";
import { css } from "@emotion/react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile.js";
import BookingForm from "./BookingForm.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [customerId, setCustomerId] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [profileOn, setProfileOn] = useState(false);
  const [hasError, setHasError] = useState(false);

  const addBooking = (booking) => {
    FakeBookings.push(booking);
    setBookings([...FakeBookings]);
  };

  const search = (searchVal) => {
    const convertedVal = searchVal.toLowerCase().trim();
    const matched = FakeBookings.filter(({ firstName, surname }) => {
      return (
        firstName.toLowerCase().includes(convertedVal) ||
        surname.toLowerCase().includes(convertedVal)
      );
    });
    setBookings(matched);
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  useEffect(() => {
    console.log("Data loading");
    setTimeout(() => {
      setBookings(FakeBookings);
      setLoaded(true);
    }, 3000);
  }, [FakeBookings]);

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
        <Search search={search} />
        {loaded ? (
          <SearchResults
            results={bookings}
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
        <BookingForm addBooking={addBooking} index={FakeBookings.length + 1} />
        <div className="form__photo"></div>
      </div>
    </div>
  );
};

export default Bookings;
