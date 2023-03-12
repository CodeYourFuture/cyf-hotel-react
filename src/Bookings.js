import React,{useState, useEffect} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";


const Bookings = ( ) => {
  const [Bookings,setBookings]= useState([]);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    
    Bookings.filter(name =>
      name.firstName.toLowerCase() === searchVal.toLowerCase() ||
      name.surname.toLowerCase() === searchVal.toLowerCase() ||
      name.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
      name.surname.toLowerCase().includes(searchVal.toLowerCase())
        ? setBookings([name])
        : -1
    );
  };
  
  useEffect(() => {
    //  console.log('hello')
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);
  
  

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={Bookings} />
      </div>
    </div>
  );
};

export default Bookings;