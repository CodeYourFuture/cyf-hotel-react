import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import { ErrorBoundary } from "react-error-boundary";
import AddNewBooking from "./AddNewBooking.js";
import { BookingForForm } from "./data/BookingForm.js";


const Bookings = () => {
  let [bookings, setBookings] = useState([]);
  let [searchResults, setSearchResults] = useState(bookings);
  let [loading, setLoading] = useState(false);
  let [updated, setUpdated] = useState(false);
  const [newBooking, setNewBooking] = useState(
      {
        id: "",
        title: "",
        firstName: "",
        surname: "",
        email: "",
        roomId: "",
        checkInDate: "",
        checkOutDate: "",
      }
    );

    useEffect(() => {
    setLoading(true);
    fetch("https://booking-server-98w3.onrender.com/bookings")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
        setSearchResults(data);
        setLoading(false);
      });}, [updated]);
    
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

  const addBooking = () => {
  console.log("Added")
  setUpdated(!updated)
 };

   const deleteRaw = () => {
     setUpdated(!updated);
   };

   return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <BookingForForm.Provider value={{newBooking, setNewBooking}}>
        <ErrorBoundary fallback={<div>Unable to load data, sorry....</div>}>
          {loading && "Loading......"}
          {!loading && <SearchResults results={searchResults} updates={deleteRaw}/>}
        </ErrorBoundary>
        <AddNewBooking adding={addBooking} />
        </BookingForForm.Provider>
      </div>
    </div>
  );
};

export default Bookings;
