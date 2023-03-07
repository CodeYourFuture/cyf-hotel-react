import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CostomerProfile.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [customerId, setCustomerId] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [errorOccurred, setErrorOccurred] = useState({
    ok: true,
    status: "",
    statusText: ""
  });

  useEffect(() => {
    //https://cyf-react.glitch.me/error
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => {
        if (!res.ok) {
          setErrorOccurred({
            ok: res.ok,
            status: res.status,
            statusText: res.statusText
          });
          throw new Error(res);
        } else {
          return res.json();
        }
      })
      .then(data => {
        setBookings(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const search = searchVal => {
    const filterBookings = bookings.filter(element => {
      return (
        element.firstName.toLowerCase().startsWith(searchVal.toLowerCase()) ||
        element.surname.toLowerCase().startsWith(searchVal.toLowerCase())
      );
    });
    setBookings(filterBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {errorOccurred.ok === false ? (
          <div>
            <span>
              An Error occurred when fetching the Bookings Data :{" "}
              {errorOccurred.status} {errorOccurred.statusText}
            </span>
          </div>
        ) : isLoading === true ? (
          <div>
            <span>The Bookings data is loading, please wait...</span>
          </div>
        ) : (
          <SearchResults results={bookings} setCustomerId={setCustomerId} />
        )}
        {customerId && <CustomerProfile id={customerId} />}
      </div>
    </div>
  );
};

export default Bookings;
