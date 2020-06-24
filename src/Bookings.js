import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";


const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const search = searchVal => {
    const result = bookings.filter((person) => {
      return (person.firstName.toUpperCase() === searchVal.toUpperCase() || person.surname.toUpperCase() === searchVal.toUpperCase())
    })
    setBookings(result)
    console.info("TO DO!", searchVal);
  };
  useEffect(() => {
    setIsLoading(true)

    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => res.json())
      .then(data => {
        // setIsLoading(false)
        setBookings(data)
      });
  }, []);

  function showProfile(id) {
    let personProfile = bookings.find(person => {
      return (person.id === id)
    })
    console.log(personProfile)
  }

  if (!bookings) {
    return null;
  }
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {isLoading ? <p>Loading....</p> : <SearchResults results={bookings} showProfile={showProfile} />}


      </div>
    </div>
  );
};
export default Bookings;