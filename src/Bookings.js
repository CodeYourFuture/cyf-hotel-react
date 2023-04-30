import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import { BarLoader } from "react-spinners";
import { css } from "@emotion/react";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [customerId, setCustomerId] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const search = (searchVal) => {
    const convertedVal = searchVal.toLowerCase().trim();
    const matched = FakeBookings.filter(({ firstName, surname }) => {
      return (
        firstName.toLowerCase().includes(convertedVal) ||
        surname.toLocaleLowerCase().includes(convertedVal)
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
  }, []);
  console.log(customerId);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loaded ? (
          <SearchResults results={bookings} setCustomerId={setCustomerId} />
        ) : (
          <div className="fallback-ui">
            <BarLoader css={override} color={"#36D7B7"} />
          </div>
        )}
        <CustomerProfile id={customerId} />
      </div>
    </div>
  );
};

export default Bookings;
