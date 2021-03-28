import React, { useState } from "react";
import moment from "moment";
import Table from "./Table";
import CustomerProfile from "./CustomerProfile";
const labels = [
  "ID",
  "Title",
  "First Name",
  "Surname",
  "Email",
  "Room ID",
  "Checkin Date",
  "Checkout Date",
  "No. of Nights",
  "Profile"
];

const SearchResults = props => {
  const [customerId, setCustomerId] = useState(0);
  const showProfile = event => {
    setCustomerId(event.target.id);
  };
  const results = props.results.map(booking => {
    booking["noOfNights"] = moment(booking.checkOutDate).diff(
      moment(booking.checkInDate),
      "days"
    );
    booking["profile"] = (
      <button id={booking.id} className="btn btn-primary" onClick={showProfile}>
        Show Profile
      </button>
    );
    return booking;
  });
  return (
    <div className="search-results">
      <Table labels={labels} data={results} />
      <CustomerProfile id={customerId} />
    </div>
  );
};

export default SearchResults;
