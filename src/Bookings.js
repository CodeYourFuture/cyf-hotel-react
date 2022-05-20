import React, { useState, useEffect } from "react";
import Search from "./components/Search.js";
import SearchResults from "./components/SearchResults";
import AddNewBooking from "./components/AddNewBooking";

const Bookings = () => {
  const [allData, setAllData] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [status, setStatus] = useState("starting");
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    setStatus("fetching");
    fetch(`https://davood-hotel-server.glitch.me/bookings`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setStatus("failed");
          setErrorMsg(data.error);
        } else {
          setAllData(data);
          setBookings(data);
          setStatus("loaded");
        }
      });
  }, []);

  const setListHandler = data => {
    console.log("handle booking");
    setBookings(data);
  };

  const search = searchVal => {
    const filteredData =
      searchVal.length > 0
        ? allData.filter(
            booking =>
              booking.firstName
                .toLowerCase()
                .includes(searchVal.toLowerCase()) ||
              booking.surname.toLowerCase().includes(searchVal.toLowerCase())
          )
        : allData;
    setBookings(filteredData);
  };

  return (
    <div className="App-content">
      <div className="container">
        {/* <Search list={bookings} />  */}
        {status === "loaded" && (
          <>
            {" "}
            <Search search={search} />
            <SearchResults list={bookings} setList={setListHandler} />
            <AddNewBooking
              newID={bookings[bookings.length - 1].id + 1}
              setBookings={setBookings}
            />
          </>
        )}
        {status === "fetching" && "Loading data..."}
        {status === "failed" && `The data load process has failed. ${errorMsg}`}
      </div>
    </div>
  );
};

export default Bookings;
