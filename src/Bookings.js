import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults, { TableHeader } from "./SearchResults.js";

const Bookings = () => {
  const [bookings, SetBooking] = useState([]);
  const [initialData, SetInitialData] = useState([]);

  const [status, setStatus] = useState("fetching");

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    SetBooking(
      initialData.filter(
        value =>
          value.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          value.surname.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
    return initialData;
  };
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setStatus("loading failed");
        }
        SetInitialData(data);
        SetBooking(data);
        setStatus("success");
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        {status === "fetching" && "Loading Please wait..."}
        {status === "success" && (
          <>
            <Search search={search} />
            <SearchResults bookings={bookings} />
          </>
        )}
        {status === "failure" && "SORRY Something went wrong"}
      </div>
    </div>
  );
};

export default Bookings;
