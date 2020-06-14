import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import BookingForm from "./BookingForm";
import "./App.css";

const Bookings = () => {
  const [bookingData, setBookingData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState(false);
  console.log("sort by id is", { sort });
  useEffect(() => {
    //start loading
    setIsLoading(true);
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      //finxish loading
      .then(data => {
        setIsLoading(false);
        setBookingData(data);
      })
      .catch(err => setError(err));
  }, []);

  const sortById = () => {
    setSort(!sort);
    sort ? assending() : dessending();
  };
  const assending = () => {
    bookingData.sort(function(a, b) {
      return a.id - b.id;
    });
  };
  const dessending = () => {
    bookingData.sort(function(a, b) {
      return b.id - a.id;
    });
  };

  const sortByRoomId = () => {
    setSort(!sort);
    sort ? assendin() : dessendin();
  };
  const assendin = () => {
    bookingData.sort(function(a, b) {
      return a.roomId - b.roomId;
    });
  };
  const dessendin = () => {
    bookingData.sort(function(a, b) {
      return b.roomId - a.roomId;
    });
  };

  const sortByFirstName = () => {
    setSort(!sort);
    sort ? assendi() : dessendi();
  };
  const assendi = () => {
    bookingData.sort(function(a, b) {
      if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
        return -1;
      }
    });
  };
  const dessendi = () => {
    bookingData.sort(function(a, b) {
      if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
        return -1;
      }
    });
  };

  const sortBySurname = () => {
    setSort(!sort);
    sort ? assend() : dessend();
  };
  const assend = () => {
    bookingData.sort(function(a, b) {
      if (a.surname.toLowerCase() > b.surname.toLowerCase()) {
        return -1;
      }
    });
  };
  const dessend = () => {
    bookingData.sort(function(a, b) {
      if (a.surname.toLowerCase() < b.surname.toLowerCase()) {
        return -1;
      }
    });
  };

  const sortByTitle = () => {
    setSort(!sort);
    sort ? assen() : dessen();
  };
  const assen = () => {
    bookingData.sort(function(a, b) {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return -1;
      }
    });
  };
  const dessen = () => {
    bookingData.sort(function(a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
    });
  };

  const sortByEmail = () => {
    setSort(!sort);
    sort ? asse() : desse();
  };
  const asse = () => {
    bookingData.sort(function(a, b) {
      if (a.email.toLowerCase() > b.email.toLowerCase()) {
        return -1;
      }
    });
  };
  const desse = () => {
    bookingData.sort(function(a, b) {
      if (a.email.toLowerCase() < b.email.toLowerCase()) {
        return -1;
      }
    });
  };

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
    <div className="App-content row">
      <Search search={search} />
      {error ? (
        <p>this is an API error</p>
      ) : isLoading ? (
        <p>loading...</p>
      ) : (
        <div className="result-form lg-col-11 col-10">
          <SearchResults
            results={bookingData}
            error={error}
            sortById={sortById}
            sortByRoomId={sortByRoomId}
            sortByFirstName={sortByFirstName}
            sortBySurname={sortBySurname}
            sortByTitle={sortByTitle}
            sortByEmail={sortByEmail}
          />
          <BookingForm updateData={updateData} />
        </div>
      )}
    </div>
  );
};

export default Bookings;
