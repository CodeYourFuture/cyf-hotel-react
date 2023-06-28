import React, { useState ,useEffect} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";


const Bookings = () => {

const [bookings, setBookings] = useState([]);
const [loadedData, setLoadedData] = useState(false);


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
  setTimeout(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data)
        setLoadedData(true)
      });
  }, 5000) 
  
}, []);




  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loadedData ? 
        (<SearchResults results={bookings} />)
        :
        (<div className="loadingDataDiv"> Loading Data ... </div>)}
      </div>
    </div>
  );
};

export default Bookings;
