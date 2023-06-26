import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://cyf-react.glitch.me")
      .then(res => {
      if(res.status >= 400) {
        throw new Error("Server responds with error!");
      } else {
        return res.json()
      }})
      .then(data => {
        setBookings(data);
        setIsLoading(false);
    },
    err => {
      setError(err)
      setIsLoading(false);
    });
  }, []);

  useEffect(()=> {
    setFilteredBookings(bookings)
  }, [bookings])


  const search = searchVal => {
   if(searchVal) {
     const filteredBookings = bookings.filter(booking => {
       const {firstName, surname} = booking;
       const preparedSearchVal = searchVal.toLowerCase();
       const preparedFirstName = firstName.toLowerCase();
       const preparedSurname = surname.toLowerCase();
       return preparedFirstName.includes(preparedSearchVal) || preparedSurname.includes(preparedSearchVal)
     });
     setFilteredBookings(filteredBookings);
   } else {
     setFilteredBookings(bookings);
   }
  };


  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {isLoading &&  <div>Loading...</div>}
        {!isLoading && error &&  <div>{error.message} </div>}
        {!isLoading && bookings && <SearchResults results={filteredBookings} />}
      </div>
    </div>
  );
};

export default Bookings;
