import React, {useEffect, useState} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  

  const [booking, setBookings] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    // console.log("Welcome in my hotel project");

    fetch(`https://cyf-react.glitch.me`)
    .then(res => res.json())
    .then(data => {
      setBookings(data)
      setDisplayData(data)
    })
    .catch(error => console.log(error));
  },[])

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    const newData = booking.filter((item) => {
      if(!searchVal) {
        return true
      }else{
        return item.firstName.toLowerCase() === searchVal || item.surname.toLowerCase() === searchVal
      }} 
      )
    setDisplayData(newData)
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults bookings={displayData} />
      </div>
    </div>
  );
};

export default Bookings;
