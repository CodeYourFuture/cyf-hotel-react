import React , { useState ,useEffect} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings,setBookings]= useState([]);
  useEffect(() => {
    fetch(
      `https://cyf-react.glitch.me`
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setBookings(data);
      });
  }, []); // Always remember to put an empty array here!

    const search = searchVal => {
    console.info("TO DO!", searchVal.toLowerCase(),bookings.filter((el)=> el.firstName===searchVal.toLowerCase()))
    //bookings.filter((el) => el.toLowerCase().includes(searchVal.toLowerCase())));
    const filteredbokings =bookings.filter(name =>
      name.firstName.toLowerCase() === searchVal.toLowerCase() ||
      name.surname.toLowerCase() === searchVal.toLowerCase() ||
      name.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
      name.surname.toLowerCase().includes(searchVal.toLowerCase())
        ? setBookings([name])
        : -1
    );
  };
  
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
