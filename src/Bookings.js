import React, { useState ,useEffect} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";


const Bookings = () => {

const [bookings, setBookings] = useState([]);


const search = (searchVal) => {
  const lowercaseSearchVal = searchVal.toLowerCase();
  const filteredBookings = bookings.filter(
    (booking) =>
      booking.firstName.toLowerCase().includes(lowercaseSearchVal) ||
      booking.surname.toLowerCase().includes(lowercaseSearchVal)
  );
  setBookings(filteredBookings);
  console.log(filteredBookings);
  console.log(bookings);
};


useEffect(() => {
  console.log("wait for loading data");
  fetch(`https://cyf-react.glitch.me`)
    .then((res) => res.json())
    .then((data) => setBookings(data));
}, []);


  

 
  
  

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} /> 
      </div>
    </div>
  );
};

export default Bookings;
