import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
// import Loading from "./loading.js";
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  const search = searchVal => {
    // console.info("TO DO!", searchVal);
    if (searchVal) {
      const matchName = bookings.filter(person => {
        return person.firstName
          .toLowerCase()
          .includes(
            searchVal || person.lasttName.toLowerCase().includes(searchVal)
          );
      });

      setBookings(matchName);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      async function fetchData() {
        try {
          const response = await fetch("https://cyf-react.glitch.me");
          if (!response.ok) {
            setLoading(false);
            throw new Error("SERVER RESPONSE ERROR !!!");
          }
          const data = await response.json();
          setBookings(data);
          setLoading(false);
          setIsError(true);
        } catch (error) {
          console.log(error);
          setIsError(false);
        }
      }
      fetchData();
    }, 2000);
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings && <SearchResults data={bookings} />}
        {loading && <span> Loading... </span>}
      </div>
    </div>
  );
};

export default Bookings;
