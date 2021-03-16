import React from "react";
import moment from "moment";
import Table from "./Table";

const labels = [
  "ID",
  "Title",
  "First Name",
  "Surname",
  "Email",
  "Room ID",
  "Checkin Date",
  "Checkout Date",
  "No. of Nights"
];

const SearchResults = props => {
  const results = props.results.map(booking => {
    booking["noOfNights"] = moment(booking.checkOutDate).diff(
      moment(booking.checkInDate),
      "days"
    );
    return booking;
  });
  return <Table labels={labels} data={results} />;
};

export default SearchResults;
