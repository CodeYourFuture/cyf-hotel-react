import React, { useState } from "react";
import moment from "moment";
import SearchResultsRow from "./SearchResultsRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [customerId, setCustomerId] = useState("");

  function handleClick(e) {
    e.preventDefault();
    setCustomerId(e.target.value);
  }

  return (
    <div className="row d-flex justify-content-between">
      <div className="col-sm">
        <table className="table table-sm table-bordered border-primary">
          <thead>
            <tr className="table-primary">
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">First name</th>
              <th scope="col">Surname</th>
              <th scope="col">Email Address</th>
              <th scope="col">Room id</th>
              <th scope="col">Check in date</th>
              <th scope="col">Check out date</th>
              <th scope="col">Number of nights</th>
              <th scope="col">Profile</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
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
      </div>
      <CustomerProfile id={customerId} />
    </div>
  );
};

export default SearchResults;
