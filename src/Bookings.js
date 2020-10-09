import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import NewBookings from "./newBookings";

const Bookings = () => {
  const [sortedBookings, setSortedBookings] = useState();
  const [ascending, setAscending] = useState(false);
  useEffect(() => {
    fetch("https://hotel-server.herokuapp.com/bookings")
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(data => setSortedBookings(data))
      .catch(err => {
        throw new Error(err.url + " Error has occured:" + err.status);
      });
  }, []);
  if (!sortedBookings) {
    return (
      <div className="m-5 text-white bg-danger p-5 text-center">
        please wait, the data is being fetched...
      </div>
    );
  } else {
    const searchVal = searchInput => {
      const newBookings = sortedBookings.filter(
        element =>
          element.firstName.toLowerCase() === searchInput.toLowerCase() ||
          element.surname.toLowerCase() === searchInput.toLowerCase() ||
          element.email.toLowerCase() === searchInput.toLowerCase()
      );
      setSortedBookings(newBookings);
    };

    const addNewBookings = data => {
      setSortedBookings([
        ...sortedBookings,
        {
          title: data.title,
          firstName: data.firstName,
          surname: data.surName,
          roomId: data.roomId,
          email: data.email,
          checkInDate: data.checkIn,
          checkOutDate: data.checkOut
        }
      ]);
    };

    function handleSortTable(header) {
      let newSortedBookings = [...sortedBookings];
      if (ascending) {
        newSortedBookings.sort((a, b) =>
          a[header].toLowerCase() > b[header].toLowerCase() ? 1 : -1
        );
      } else {
        newSortedBookings.sort((a, b) =>
          a[header].toLowerCase() < b[header].toLowerCase() ? 1 : -1
        );
      }
      setSortedBookings(newSortedBookings);
      setAscending(!ascending);
    }
    function handleSortNumber(header) {
      let newSortedBookings = [...sortedBookings];
      if (ascending) {
        newSortedBookings.sort((a, b) => (a[header] > b[header] ? 1 : -1));
      } else {
        newSortedBookings.sort((a, b) => (a[header] < b[header] ? 1 : -1));
      }
      setSortedBookings(newSortedBookings);
      setAscending(!ascending);
    }

    return (
      <div className="col-12">
        <div className="table container col-12 col-md-10 ml-sm-1 ml-md-5 ml-lg-auto mr-lg-auto">
          <Search searchVal={searchVal} />
          <SearchResults
            bookings={sortedBookings}
            handleSortTable={handleSortTable}
            handleSortNumber={handleSortNumber}
            ascending={ascending}
          />
          <NewBookings addNewBookings={data => addNewBookings(data)} />
        </div>
      </div>
    );
  }
};

export default Bookings;
