import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import BookingForm from "./BookingForm";
import "./App.css";

const Bookings = () => {
  const [bookingData, setBookingData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const[formData, setFormData]=useState({})
  useEffect(() => {
    //start loading
    setIsLoading(true);
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      //finish loading
      .then(data => {
        setIsLoading(false);
        setBookingData(data);
      })
      .catch(err => setError(err));
  }, []);

  const updateData = newObj => {
    const formData = {
      ...newObj,
      id: bookingData.length + 1
    };

    setBookingData([...bookingData, formData]);
  };

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const searchResult = bookingData.filter(person => {
      return (
        person.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        person.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookingData(searchResult);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {error ? (
          <p>this is an API error</p>
        ) : isLoading ? (
          <p>loading...</p>
        ) : (
          <div>
            <SearchResults results={bookingData} error={error} />
            <BookingForm updateData={updateData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
