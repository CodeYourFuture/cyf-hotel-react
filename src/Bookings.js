import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filterSearchResult, setFilterSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const search = searchVal => {
    if (searchVal === "") {
      setFilterSearchResult(bookings);
    } else {
      const newBooking = bookings.filter(book => {
        console.log(book);
        return (
          book.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          book.surname.toLowerCase().includes(searchVal.toLowerCase())
        );
      });
      setFilterSearchResult(newBooking);
    }

    console.info("TO DO!", searchVal);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoading(true);
      })
      .catch(err => console.log("Error " + err));
  }, []);
  // console.log(bookings);
  return (
    <div className=" d-flex flex-row justify-content-center align-self-center">
      {loading ? (
        <div className="App-content">
          <div className="container">
            <Search search={search} />
            <SearchResults
              results={
                filterSearchResult.length === 0 ? bookings : filterSearchResult
              }
            />
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <Loader
            className="py-5 my-5"
            type="Circles"
            color="#17a2b8"
            height={200}
            width={200}
            timeout={500} //5 secs
          />
        </div>
      )}
    </div>
  );
};

export default Bookings;
