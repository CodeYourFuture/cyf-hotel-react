import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import { ErrorBoundary } from "react-error-boundary";
import AddNewBooking from "./AddNewBooking.js";


const Bookings = () => {
  let [bookings, setBookings] = useState([]);
  let [searchResults, setSearchResults] = useState(bookings);
  let [loading, setLoading] = useState(false);

    useEffect(() => {
    setLoading(true);
    fetch("https://cyf-react.glitch.me")
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
        setSearchResults(data);
        setLoading(false);
      });}, []);
    
  const search = (searchVal) => {
  console.info("TO DO!", searchVal);
   searchVal !== ""
     ? setSearchResults(
         bookings.filter((booking) =>
           booking.firstName
             .toLowerCase()
             .includes(
               searchVal.toLowerCase()) ||
                 booking.surname.toLowerCase().includes(searchVal.toLowerCase()
             )
         )
       )
     : setSearchResults(bookings);
 };

  const addBooking = (newBooking) => {
  console.log("Added", newBooking)
  setSearchResults(searchResults.concat(newBooking))
 };
   
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <ErrorBoundary fallback={<div>Unable to load data, sorry....</div>}>
          {loading && "Loading......"}
          {!loading && <SearchResults results={searchResults} />}
        </ErrorBoundary>
        <AddNewBooking adding={addBooking}/>
      </div>
    </div>
  );
};

export default Bookings;
