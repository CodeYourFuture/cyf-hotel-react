import React, {useEffect, useState} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  

  const [booking, setBookings] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {

    fetch(`https://cyf-react.glitch.me/delayed`)
    .then((res) => {
      if (!res.ok) {
          throw Error("Failed to fetch bookings");
    }
    return res.json()
  })
    .then(data => {
      setBookings(data)
      setDisplayData(data)
      setIsLoading(false);
      setErrorMessage(null);
    })
    .catch((error) => {
      setErrorMessage(error.message);
        setIsLoading(false);
    })
  },[])

  if (isLoading) {
    return <p className="loadingParagraph">Loading...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    const newData = booking.filter((item) => {
      if(!searchVal) {
        return true
      }else{
        return item.firstName.toLowerCase() === searchVal || item.surname.toLowerCase() === searchVal
      }} 
      )
    setDisplayData(newData)
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults bookings={displayData} />
      </div>
    </div>
  );
};

export default Bookings;
