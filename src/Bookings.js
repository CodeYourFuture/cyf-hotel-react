import React, { useState ,useEffect} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";


const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  //const [bookings, setBookings]=useState(FakeBookings);
  const [bookings, setBookings] = useState([]);

  useEffect(()=>{
    console.log("wait for loading data");
    fetch(`https://cyf-react.glitch.me`)
    .then((res) => res.json())
    .then((data) => setBookings(data));} ,[bookings])
  

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
