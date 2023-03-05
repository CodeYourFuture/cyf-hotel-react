import React, { useState, useEffect, useCallback } from "react";
import BookingsRow from "./BookingsRow";
import CustomerProfile from "./CustomerProfile";
import moment, { duration } from "moment/moment";

const SearchResults = (props) => {
  let [guestProfile, setGuestProfile] = useState(null);

  //these two states are created for sorting columns in table
  const [data, setData] = useState(props.results);
  const [sortOrder, setSortOrder] = useState("asc");

  //to update the state of data whenever props.results changes.
  useEffect(() => {
    setData(props.results);
  }, [props.results]);

  //sorting columns in the table
  const sortBy = (property) => {
    const sortedData = [...data].sort((a, b) => {
      if (typeof a[property] === "number") {
        if (sortOrder === "asc") {
          return a[property] - b[property];
        } else {
          return b[property] - a[property];
        }
      } else {
        if (sortOrder === "asc") {
          return a[property] - b[property] ? 1 : -1;
        } else {
          return a[property] < b[property] ? 1 : -1;
        }
      }
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
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
      array.map((guest) => {
        let durationInfo = calculateNights(
          guest.checkInDate,
          guest.checkOutDate
        );
        guest["duration"] = durationInfo;
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
            <th scope="col" onClick={() => sortBy("id")}>
              Id
            </th>
            <th scope="col" onClick={() => sortBy("title")}>
              Title
            </th>
            <th scope="col" onClick={() => sortBy("firstName")}>
              First name
            </th>
            <th scope="col" onClick={() => sortBy("surname")}>
              Surname
            </th>
            <th scope="col" onClick={() => sortBy("email")}>
              EMAIL
            </th>
            <th scope="col" onClick={() => sortBy("roomId")}>
              Room id
            </th>
            <th scope="col" onClick={() => sortBy("checkInDate")}>
              Check in date
            </th>
            <th scope="col" onClick={() => sortBy("checkOutDate")}>
              Check out date
            </th>
            <th scope="col" onClick={() => sortBy("duration")}>
              Number of nights
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
