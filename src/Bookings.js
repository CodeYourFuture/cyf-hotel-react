import React, {useEffect, useState} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () =>
{
  const search = searchVal =>
  {
    let searchedBookings = bookings.filter(booking =>
    {
      if(booking.firstName.toLowerCase() === searchVal.toLowerCase() || booking.surname.toLowerCase() === searchVal.toLowerCase())
      {
        return true;
      }

      else
      {
        return false;
      }
    });

    return setBookings(searchedBookings);
  }
  
  const [bookings, setBookings] = useState([]);

  useEffect(() =>
  {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => setBookings(data))
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search}/>
        <SearchResults results={bookings}/>
      </div>
    </div>
  );
};

export default Bookings;
