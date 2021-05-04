import React, { useState } from "react";
import moment from "moment";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [id, setId] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [isAscending, setIsAscending] = useState(null);

  const handleSetId = customerId => {
    if (customerId === id) {
      // when clicked on the same customer's button hide the profile
      setId(null);
    } else {
      setId(customerId);
    }
  };

  const handleTableHeadClick = field => {
    if (sortBy === field) {
      // toggling A-Z and Z-A on the same column
      setIsAscending(!isAscending);
    } else {
      // when clicked on different column sort ascending
      setIsAscending(true);
    }
    setSortBy(field);
  };

  const sortResults = field => {
    const sorted = results.slice().sort((res1, res2) => {
      if (typeof res1[field] === "string") {
        // string sort
        return isAscending
          ? res1[field].localeCompare(res2[field])
          : res2[field].localeCompare(res1[field]);
      } else {
        // number sort
        return isAscending
          ? res1[field] - res2[field]
          : res2[field] - res1[field];
      }
    });
    return sorted;
  };

  // add numberOfNights data
  results.map(booking => {
    booking.numberOfNights = calcNumberOfNights(
      booking.checkInDate,
      booking.checkOutDate
    );
    return booking;
  });

  let sortedBookings = sortResults(sortBy);

  return (
    <>
      <table className="table">
        <TableHead handleClick={handleTableHeadClick} />
        <TableBody bookings={sortedBookings} handleButtonClick={handleSetId} />
      </table>
      {id && <CustomerProfile id={id} />}
    </>
  );
};

const calcNumberOfNights = (checkInDate, checkOutDate) => {
  const checkIn = moment(checkInDate);
  const checkOut = moment(checkOutDate);
  return checkOut.diff(checkIn, "days");
};

export default SearchResults;
