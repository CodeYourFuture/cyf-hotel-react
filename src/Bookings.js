import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import "./Bookings.css";

const Bookings = ({ bookings, setBookings }) => {
  const [fullList, setFullList] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  //function to show full list of guests
  const showFullList = () => {
    setBookings(fullList);
  };

  //function to search for guest by name or surname
  const search = (searchVal) => {
    if (searchVal === "") {
      return;
    }
    const newGuestLists = bookings.filter((guest) => {
      if (
        guest.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        guest.surname.toLowerCase().includes(searchVal.toLowerCase())
      ) {
        return guest;
      }
    });
    setBookings(newGuestLists);
  };

  //getting data about guest from API
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        let response = await fetch("https://temporary-cyf-react.onrender.com/");

        if (response.status >= 400 && response.status < 600) {
          throw new Error("Bad response from server");
        } else {
          let data = await response.json();
          setBookings(data);
          setFullList(data);
          setIsLoading(false);
        }
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="guest-list" className="App-content">
      <div className="container">
        <Search
          search={search}
          guests={bookings}
          resetBooking={setBookings}
          showFullList={showFullList}
        />
        <SearchResults results={bookings} />
        {isLoading ? <p>Please wait for loading data...</p> : null}
        {error !== "" ? (
          <p>{`We cannot load the page because an error has occurred.  ${error}. Please fix the error and try one more time.`}</p>
        ) : null}
      </div>
    </div>
  );
};

export default Bookings;
