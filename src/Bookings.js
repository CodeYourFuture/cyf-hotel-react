import Search from "./Search.js";
import React, { useState, useEffect } from "react";
import Table from "./Table.jsx";
import CustomerProfile from "./CustomerProfile.jsx";

const Bookings = (props) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        setBookings(data);
    })
  }, [])

  // const [id, setId] = useState("")

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(prev => prev.filter(item => item.firstName.toLowerCase() === searchVal || item.surname.toLowerCase() === searchVal))
  };

  const [showProfile, setShowProfile] = useState();
    function clientProfile(id) {
      setShowProfile(id);
      console.log(id);
    }

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={bookings} /> */}
        <Table data={bookings} clientProfile={clientProfile}/>
        <CustomerProfile id={showProfile}/>
      </div>
    </div>
  );
};

export default Bookings;
