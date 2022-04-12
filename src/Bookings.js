import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [status, setStatus] = useState("fetching");
  const [statusMessage, setStatusMessage] = useState("Loading please wait...");

  useEffect(() => {
    setStatus("fetching");
    setStatusMessage("Loading please wait...");
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setStatus("failure");
          setStatusMessage(data.error);
        } else {
          setStatus("success");
          setBookings(data);
          setInitialData(data);
        }
      });
  }, []);

  const search = searchVal => {
    setBookings(
      initialData.filter(
        ({ firstName, surname }) =>
          firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          surname.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        {status === "fetching" && statusMessage}
        {status === "success" && (
          <>
            <Search search={search} />
            <SearchResults results={bookings} />
          </>
        )}
        {status === "failure" && statusMessage}
      </div>
    </div>
  );
};

export default Bookings;
