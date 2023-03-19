import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayError,setDisplayError] = useState(false);
  // const message = "Error fetching data From backend";
    const [message, setMessage] = useState("");

  // let message="";
  useEffect(() => {
    console.log("this is a test");
    // const url = "https://cyf-react.glitch.me/delayed";
    const url = "https://cyf-react.glitch.me/error";
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("her is the data",{data})
        if(data.error){
          setMessage(data.error)
        setDisplayError(true);  
      return setBookings([]);  
      }
        setLoading(false);
        return setBookings(data);
      })
      .catch((error) => {
        setLoading(false)
        setDisplayError(true)
        console.log(error);
        return setBookings([]);

      });
  }, []);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    // setBookings(
    const y = bookings.filter(
      (x) => searchVal === x.firstName || searchVal === x.surname
    );
    console.log(y);
    setBookings(y);
    // );
  };
  // setBookings((bookings) => {
  //   bookings = FakeBookings;
  // });
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* // if displayError == true, then show the <p>with the error</p> */}
        <p className="error">{displayError ? message : ""}</p>
        {loading ? (
          <h2 className="loading"> Loading ..... </h2>
        ) : (
          <SearchResults results={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
