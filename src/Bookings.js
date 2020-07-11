import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";
import FormOfBooking from "./FormOfBooking";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSort, setIsSort] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://hamidreza-hotel-server.glitch.me")
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        setBookings(data);
        console.log(bookings);
      })
      .catch(err => setError(err));
  }, []);

  const sortById = () => {
    setIsSort(!isSort);
    isSort ? assendingId() : desendingId();
  };
  const assendingId = () => {
    bookings.sort(function(a, b) {
      return a.id - b.id;
    });
  };
  const desendingId = () => {
    bookings.sort(function(a, b) {
      return b.id - a.id;
    });
  };
  const sortByTitle = () => {
    setIsSort(!isSort);
    isSort ? assendingTitle() : desendingTitle();
  };
  const assendingTitle = () => {
    bookings.sort(function(a, b) {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return -1;
      }
    });
  };
  const desendingTitle = () => {
    bookings.sort(function(a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    });
  };
  const sortByFirstName = () => {
    setIsSort(!isSort);
    isSort ? assendingFirstName() : desendingFirstName();
  };
  const assendingFirstName = () => {
    bookings.sort(function(a, b) {
      if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
        return -1;
      }
    });
  };
  const desendingFirstName = () => {
    bookings.sort(function(a, b) {
      if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
        return -1;
      }
    });
  };
  const sortBySurname = () => {
    setIsSort(!isSort);
    isSort ? assendingSurname() : desendingSurname();
  };
  const assendingSurname = () => {
    bookings.sort(function(a, b) {
      if (a.surname.toLowerCase() > b.surname.toLowerCase()) {
        return -1;
      }
    });
  };
  const desendingSurname = () => {
    bookings.sort(function(a, b) {
      if (a.surname.toLowerCase() < b.surname.toLowerCase()) {
        return -1;
      }
    });
  };
  const sortByEmail = () => {
    setIsSort(!isSort);
    isSort ? assendingEmail() : desendingEmail();
  };
  const assendingEmail = () => {
    bookings.sort(function(a, b) {
      if (a.email.toLowerCase() > b.email.toLowerCase()) {
        return -1;
      }
    });
  };
  const desendingEmail = () => {
    bookings.sort(function(a, b) {
      if (a.email.toLowerCase() < b.email.toLowerCase()) {
        return -1;
      }
    });
  };
  const sortByRoomId = () => {
    setIsSort(!isSort);
    isSort ? assendingByRoomId() : desendingByRoomId();
  };
  const assendingByRoomId = () => {
    bookings.sort(function(a, b) {
      return a.roomId - b.roomId;
    });
  };
  const desendingByRoomId = () => {
    bookings.sort(function(a, b) {
      return b.roomId - a.roomId;
    });
  };
  const sortByDateIn = () => {
    setIsSort(!isSort);
    isSort ? assendingDateIn() : desendingDateIn();
  };
  const assendingDateIn = () => {
    bookings.sort(function(a, b) {
      if (a.checkInDate.toLowerCase() > b.checkInDate.toLowerCase()) {
        return -1;
      }
    });
  };
  const desendingDateIn = () => {
    bookings.sort(function(a, b) {
      if (a.checkOutDate.toLowerCase() < b.checkOutDate.toLowerCase()) {
        return -1;
      }
    });
  };

  const updateData = newObj => {
    const formData = {
      ...newObj,
      id: bookings.length + 1
    };

    setBookings([...bookings, formData]);
  };

  const search = searchVal => {
    const searchFiltered = bookings.filter(
      element =>
        element.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        element.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(searchFiltered);
  };

  return (
    <div className="row">
      <div className="">
        <Search search={search} />
        {error ? <p>API ERROR</p> : <p>loading page... </p>}
        <SearchResults
          results={bookings}
          sortById={sortById}
          sortByTitle={sortByTitle}
          sortByFirstName={sortByFirstName}
          sortBySurname={sortBySurname}
          sortByEmail={sortByEmail}
          sortByRoomId={sortByRoomId}
          sortByDateIn={sortByDateIn}
          // sortByDateOut={sortByDateOut}
        />
        <FormOfBooking updateData={updateData} />
      </div>
    </div>
  );
};

export default Bookings;
