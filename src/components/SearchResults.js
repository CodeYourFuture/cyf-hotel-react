import React, { useState } from "react";
import moment from "moment";
import SearchResultsRow from "./SearchResultsRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [customerId, setCustomerId] = useState("");

  function handleClick(e) {
    setCustomerId(e.target.value);
  }

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email Address</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((booking, index) => {
            let inDate = moment(booking.checkInDate);
            let outDate = moment(booking.checkOutDate);
            let numOfNights = outDate.diff(inDate, "days");
            return (
              <SearchResultsRow
                booking={booking}
                key={index}
                numOfNights={numOfNights}
                handleClick={handleClick}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={customerId} />
    </>
  );
};

export default SearchResults;
