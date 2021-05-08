import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import BookingForm from "./BookingForm";
import "../App.css";

const Bookings = () => {
  const [bookingData, setBookingData] = useState([]);
  const [route, setRoute] = useState("");
  const [requestOption, setRequestOption] = useState({ method: "GET" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortAscending, setSortAscending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showDisplay, setShowDisplay] = useState("hide");
  const [data, setData] = useState({
    title: "",
    firstName: "",
    surname: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
    email: ""
  });

  useEffect(() => {
    //start loading
    setIsLoading(true);
    setIsSubmitted(false);
    fetch(`https://cyf-nader-hotel-server.herokuapp.com/bookings`, {
      method: "GET"
    })
      .then(res => res.json())
      //finxish loading
      .then(data => {
        setIsLoading(false);
        setBookingData(data);
      })
      .catch(err => setError(err));
  }, [isSubmitted]);

  const sortBy = item => {
    setSortAscending(!sortAscending);
    sortAscending ? assending(item) : dessending(item);
  };
  const assending = key => {
    bookingData.sort(function(a, b) {
      if (a[key].substring) {
        if (a[key].toLowerCase() > b[key].toLowerCase()) {
          return -1;
        }
      } else {
        return a[key] - b[key];
      }
    });
  };

  const dessending = key => {
    bookingData.sort(function(a, b) {
      if (a[key].substring) {
        if (a[key].toLowerCase() < b[key].toLowerCase()) {
          return -1;
        }
      } else {
        return b[key] - a[key];
      }
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    setShowDisplay("hide");
    fetch(`https://cyf-nader-hotel-server.herokuapp.com/bookings/add`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      //finxish loading
      .then(data => {
        setIsLoading(false);
        // setBookingData(data);
      })
      .catch(err => setError(err));

    setIsSubmitted(true);
  };

  const changeHandler = event => {
    const updateData = {
      ...data,
      [event.target.name]: event.target.value
    };
    setData(updateData);
  };

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setRoute(`/search?term=${searchVal}`);
    setRequestOption({ method: "GET" });
  };

  return (
    <div className="App-content row">
      <Search search={search} />
      {error ? (
        <p>this is an API error</p>
      ) : isLoading ? (
        <p>loading...</p>
      ) : (
        <div className="result-form lg-col-12 col-12">
          <SearchResults results={bookingData} error={error} sortBy={sortBy} />
          <div>
            <button
              onClick={() => setShowDisplay("show")}
              className="btn btn-primary"
            >
              Add booking
            </button>
            {/* <button onClick={()=>setShowDisplay("show")} className="btn btn-primary">Edit booking</button> */}
          </div>
          <BookingForm
            submitHandler={submitHandler}
            changeHandler={changeHandler}
            showDisplay={showDisplay}
          />
        </div>
      )}
    </div>
  );
};

export default Bookings;
