import React, {useEffect, useState} from 'react';
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.jsx";
// import SearchResultsOther from './components/SearchResultsOther.js';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  
  const [searchVal, setSearchVal] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/error")
      .then((res) => res.json())
      .then((data) => {
        if (data.error !== undefined) {
          console.log("error");
          setIsError(true);
        } else {
          setIsLoading(false);
          setBookings(data);
        }
      })
  }, []);

  /*
isLoading: true, isError: false,  
isLoading: false, isError: false, 
isLoading: false, isError: true, 
*/

  const search = (searchVal) => {
    console.log("TO DO!", searchVal);
    setSearchVal(searchVal);
  };

  let displayedBookings = bookings.filter(
    (booking) =>
      booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
      booking.surname.toLowerCase().includes(searchVal.toLowerCase())
  );

  
  return (
    <div className="App-content">
      <div className="container">
        {isError ? (
          <p>Error loading...</p>
        ) : isLoading ? (
          <p>Page loading...</p>
        ) : (
          <>
            <Search search={search} />
            <SearchResults results={displayedBookings} />
          </>
        )}
        {/* <SearchResultsOther results={bookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;

