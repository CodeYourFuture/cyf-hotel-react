import React, { useState, useEffect } from "react";
import Search from "./Search.js";
// import SearchButton from "./SearchButton.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile.js";
import Loader from "react-loader-spinner";

const Bookings = () => {
  const [booking, setBooking] = useState([]);
  const [customerId, setCustomerId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // const url = `https://cyf-react.glitch.me/delayed`;
  const url = `https://cyf-react.glitch.me/error`;

  const search = searchVal => {
    // console.info("TO DO!", searchVal);
    let searchQuery = searchVal.toLowerCase();
    let filtered = booking.filter(data => {
      if (
        data.firstName.toLowerCase() === searchQuery ||
        data.surname.toLowerCase() === searchQuery
      ) {
        return data;
      }
    });
    setBooking(filtered);
  };

  const receiveCustomerId = id => {
    setCustomerId(id);
  };

  useEffect(() => {
    // console.log("Fetch Data Remotely");

    //   const fetchBooking = async () => {
    //     setIsLoading(true);
    //     setHasError(false);
    //     try {
    //       fetch(url)
    //         .then((response) => response.json())
    //         .then((fetchedBookingData) => {
    //           setBooking(fetchedBookingData);
    //           setIsLoading(false);
    //         })
    //         .catch((err) => setHasError(true));
    //     } catch (err) {
    //       setHasError(true);
    //     }
    //     setIsLoading(false);
    //   };
    //   fetchBooking();
    let unmounted = false;

    setIsLoading(true);
    setHasError(false);
    fetch(url)
      .then(response => response.json())
      .then(bookingData => {
        if (!unmounted) {
          setBooking(bookingData);
          setIsLoading(false);
        }
      })
      .catch(err => {
        setHasError(true);
        setIsLoading(false);
      });
    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <div className="App-content">
      {/* {console.log(isLoading)} */}
      {hasError ? (
        <p>Something went wrong.</p>
      ) : isLoading ? (
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      ) : (
        <div className="container">
          <Search search={search} />
          {/* <SearchResults /> */}
          <SearchResults results={booking} setCustomerId={receiveCustomerId} />
          <CustomerProfile id={customerId} />
        </div>
      )}
    </div>
  );
};

export default Bookings;
