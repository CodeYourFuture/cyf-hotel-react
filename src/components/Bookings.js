import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import NewBooking from "./NewBooking";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingsData, setData] = useState([]);

  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => {
        if (!res.ok) {
          setError(true);
          setLoaded(false);
          throw Error("Error loading the resource");
        } else return res.json();
      })

      .then(data => {
        //console.log(data);
        setBookings(data);
        setData(bookingsData.concat(data));
        setLoaded(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  let search = searchVal => {
    let searched = bookingsData.filter(
      booking =>
        booking.firstName.toLowerCase() === searchVal ||
        booking.surname.toLowerCase() === searchVal
    );
    //console.info("TO DO!", searchVal);
    setBookings(searched);
  };

  let formvals = entry => {
    //  console.log(entry)
    setBookings(bookings.concat(entry));
  };

  return (
    <div className="App-content">
      <div className="container">
        {error && <p>error while retrieving data from resource</p>}
        {loaded && <p>loading data from resource</p>}
        <Search search={search} />

        {bookings && <SearchResults results={bookings} />}

        <NewBooking formvals={formvals} />
      </div>
    </div>
  );
};

export default Bookings;
