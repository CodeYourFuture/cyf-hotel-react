import React, { useState, useEffect, useCallback } from "react";
import BookingsRow from "./BookingsRow";
import CustomerProfile from "./CustomerProfile";
import moment from "moment/moment";

const SearchResults = (props) => {
  const [guestProfile, setGuestProfile] = useState(null);

  //these two states are created for sorting columns in table
  const [data, setData] = useState(props.results);
  const [sortStates, setSortStates] = useState(Array(9).fill(false));

  //to keep track  of the last sorted column and the last sort order
  const [lastSortedColumn, setLastSortedColumn] = useState("");
  const [lastSortOrder, setLastSortOrder] = useState("");

  //to update the state of data whenever props.results changes.
  useEffect(() => {
    setData(props.results);
    setSortStates(Array(9).fill(false));
  }, [props.results, setData, setSortStates]);

  //sorting columns in the table
  const sortBy = (property, index) => {
    let newSortOrder;
    if (property === lastSortedColumn) {
      newSortOrder = lastSortOrder === "asc" ? "desc" : "asc";
      setSortStates((prevStates) =>
        prevStates.map((state, i) => (i === index ? !state : state))
      );
    } else {
      newSortOrder = "asc";
      setSortStates(Array(9).fill(false));
      setSortStates((prevStates) =>
        prevStates.map((state, i) => (i === index ? !state : state))
      );
    }
    setLastSortedColumn(property);
    setLastSortOrder(newSortOrder);
    setData((prevData) => {
      const sortedData = [...prevData].sort((a, b) => {
        if (typeof a[property] === "number") {
          if (newSortOrder === "asc") {
            return a[property] - b[property];
          } else {
            return b[property] - a[property];
          }
        } else {
          if (newSortOrder === "asc") {
            return a[property] < b[property] ? -1 : 1;
          } else {
            return a[property] < b[property] ? 1 : -1;
          }
        }
      });

      return sortedData;
    });
  };

  //calculating number of nights
  const calculateNights = useCallback((firstDate, secondDate) => {
    let first = moment(firstDate, "YYYY-MM-DD");
    let second = moment(secondDate, "YYYY-MM-DD");
    return second.diff(first, "days");
  }, []);

  //function for adding duration key and value to the array of guests
  const addDurationToGuest = (array) => {
    if (array.length > 0) {
      array.forEach((guest) => {
        guest.duration = calculateNights(guest.checkInDate, guest.checkOutDate);
      });
    }
    return array;
  };

  //to add duration field to the array, so then we can sort number of nights column in table
  useEffect(() => {
    setData(addDurationToGuest(data));
  }, [data]);

  return (
    <div className="table-responsive">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col" onClick={() => sortBy("id", 0)}>
              Id
              <span>
                <span>{sortStates[0] ? "↑" : "↓"}</span>
              </span>
            </th>
            <th scope="col" onClick={() => sortBy("title", 1)}>
              Title
              <span>{sortStates[1] ? "↑" : "↓"}</span>
            </th>
            <th scope="col" onClick={() => sortBy("firstName", 2)}>
              First name
              <span>{sortStates[2] ? "↑" : "↓"}</span>
            </th>
            <th scope="col" onClick={() => sortBy("surname", 3)}>
              Surname
              <span>{sortStates[3] ? "↑" : "↓"}</span>
            </th>
            <th scope="col" onClick={() => sortBy("email", 4)}>
              EMAIL
              <span>{sortStates[4] ? "↑" : "↓"}</span>
            </th>
            <th scope="col" onClick={() => sortBy("roomId", 5)}>
              Room id
              <span>{sortStates[5] ? "↑" : "↓"}</span>
            </th>
            <th scope="col" onClick={() => sortBy("checkInDate", 6)}>
              Check in date
              <span>{sortStates[6] ? "↑" : "↓"}</span>
            </th>
            <th scope="col" onClick={() => sortBy("checkOutDate", 7)}>
              Check out date
              <span>{sortStates[7] ? "↑" : "↓"}</span>
            </th>
            <th scope="col" onClick={() => sortBy("duration", 8)}>
              Number of nights
              <span>{sortStates[8] ? "↑" : "↓"}</span>
            </th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((guest) => (
              <BookingsRow
                key={guest.roomId}
                guest={guest}
                changeGuestProfile={setGuestProfile}
              />
            ))}
        </tbody>
      </table>
      <CustomerProfile guest={guestProfile} />
    </div>
  );
};

export default SearchResults;
