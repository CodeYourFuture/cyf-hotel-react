import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

function Bookings() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [typedSearchValues, setTypedSearchValues] = useState([]);
  let allBookings;

  const search = (searchVal) => {
    setTypedSearchValues(searchVal);
  };

  const filteredBookings = bookings.filter((customerName) => {
    return (
      customerName.firstName.toLowerCase().includes(typedSearchValues) ||
      customerName.surname.toLowerCase().includes(typedSearchValues)
    );
  });

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.error) {
          setErrorMessage(data.error);
        } else {
          allBookings = data;
          setBookings(allBookings);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  return (
    <div className="App-content">
      {loading ? (
        <p>Please wait while we fetch the info requested</p>
      ) : (
        <div>
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            <div className="container">
              <Search search={search} />
              <SearchResults bookingResults={filteredBookings} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Bookings;
