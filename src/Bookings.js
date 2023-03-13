
import React, {useState,useEffect} from "react";

import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from “./data/fakeBookings.json”;


const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`).then(res =>
      res.json().then(data => {
        console.log(data);
        setBookings(data);
      })
    );
  }, []);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(bookings.filter(book => (
      book.firstName.toLowerCase().includes(searchVal.toLowerCase()) || book.surname.toLowerCase().includes(searchVal.toLowerCase())
    )))
  };
   useEffect(() => {
     fetch("https://cyf-react.glitch.me")
       .then((response) => {
         if (response.ok) {
           return response.json();
         } else {
           setHasError(true);
         }
       })

       .then((data) => {
         setBookings(data);
         setIsLoading(false);
       })
       .catch((error) => setHasError(true));
   }, []);
return (
  <div className="App-content">
    <div className="container">
      <Search search={search} />
      {hasError ? (
        <div>Oh no something went wrong!</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <SearchResults results={bookings} />
      )}
    </div>
  </div>
);
};



 
 


export default Bookings;