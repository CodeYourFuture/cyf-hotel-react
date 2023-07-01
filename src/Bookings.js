import React, {useState,useEffect} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";


const Bookings = () => {
  const [bookings,setBookings]=useState([]);
  const [filteredBookings,setFilteredBookings]=useState([]);

  useEffect(() => {
    console.log("Welcome");

    fetch("https://cyf-react.glitch.me")
        .then(response => response.json())
        .then(data => {
          setBookings(data)
          setFilteredBookings(data)})
        .catch(error => console.error(error));
  }, []);


  const search = value => {
    const valToLowerCase =value.toLowerCase().trim();
    const filteredResults=bookings.filter(({firstName, surname}) => {
      return firstName.toLowerCase().includes(valToLowerCase) || surname.toLowerCase().includes(valToLowerCase)
    }
  );
    setFilteredBookings(filteredResults)
    console.info ("To Do!",filteredResults)
  }


 
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={filteredBookings} />
      </div>
    </div>
  );
};

export default Bookings;
