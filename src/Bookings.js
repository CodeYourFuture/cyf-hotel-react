import React, {useState, useEffect} from "react";   
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";


const Bookings = () => {

  const search = searchVal => {
    console.info("TO DO!", searchVal);

     setBookings(
      bookings.filter(name => name.firstName.toLowerCase().includes(searchVal.toLowerCase()) || name.surname.toLowerCase().includes(searchVal.toLowerCase()) )
    )
  };

  const [bookings, setBookings] = useState([])
  
  useEffect(() => {
    fetch(
      `https://cyf-react.glitch.me/delayed`
    )
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setBookingMessage(false);
      });
  }, []);

  const [bookinMessage, setBookingMessage] = useState(true)

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <div>
          {bookinMessage ? (<span> Looading data ... </span>) : (<SearchResults results = {bookings} />) }
        </div>
      </div>
    </div>
  );
};

export default Bookings;
