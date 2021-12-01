import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = props => {
  // eslint-disable-next-line
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // https://cyf-react.glitch.me/error - use this API to test the error message after the fetch is executed
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setError(true);
        }
      })
      .then(data => {
        const receivedData = data;
        if (props.newBooking) {
          receivedData.push(props.newBooking);
        }
        setBookings(receivedData);
      })
      .catch(error => console.log(`Error received: ${error}`));
  }, [props.newBooking]);

  const search = searchVal => {
    const filteredBookings = bookings.filter(
      client =>
        client.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        client.surname.toLowerCase().includes(searchVal.toLowerCase())
    );

    if (filteredBookings.length > 0) {
      setBookings(filteredBookings);
    } else {
      alert("No matching bookings have been found");
    }
  };

  return (
    <div className="App-content">
      <div className="Container">
        <Search search={search} />
        {error ? (
          <p className="SpanDelayedData red">
            Encountered something unexpected, data couldn't be fetched.
          </p>
        ) : bookings.length === 0 ? (
          <p className="SpanDelayedData">Please wait the page is loading..</p>
        ) : (
          <SearchResults results={bookings} />
        )}
        ;
      </div>
    </div>
  );
};

export default Bookings;
