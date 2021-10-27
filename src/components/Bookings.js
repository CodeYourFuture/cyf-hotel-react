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
    console.log("search calling", searchVal);
    //console.info("TO DO!", searchVal);
    setAllBookings(false);
    setBookings(searched);
  };

  let formvals = entry => {
    console.log(entry);
    setBookings(bookings.concat(entry));
  };
  const [allBookings, setAllBookings] = useState(false);
  const bookingsAll = () => {
    return setAllBookings(true);
  };
  return (
    <div className="App-content">
      <div className="container">
        {error && (
          <p className="message">error while retrieving data from resource</p>
        )}
        {loaded && <p className="message">loading data from resource</p>}
        <Search search={search} />
        {allBookings ? (
          <SearchResults results={bookingsData} />
        ) : (
          <SearchResults results={bookings} />
        )}
        <button onClick={bookingsAll}>Show All Bookings</button>
        <NewBooking formvals={formvals} />
      </div>
    </div>
  );
};

export default Bookings;
