import React from "react";
const moment = require("moment");

const numberOfNights = (dayIn, dayOut) => {
  const dayInToMoment = moment(dayIn);
  const dayOutToMoment = moment(dayOut);

  return dayOutToMoment.diff(dayInToMoment, "days");
};

const SearchResults = prop => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Checkout date</th>
          <th scope="col">Number of Nights</th>
        </tr>
      </thead>
      <tbody>
        {prop.results.map(
          (
            {
              checkInDate,
              checkOutDate,
              email,
              firstName,
              id,
              roomId,
              surname,
              title
            },
            i
          ) => {
            return (
              <tr key={i}>
                <th scope="row">{id}</th>
                <th>{title}</th>
                <th>{firstName}</th>
                <th>{surname}</th>
                <th>{email}</th>
                <th>{roomId}</th>
                <th>{checkInDate}</th>
                <th>{checkOutDate}</th>
                <th>{numberOfNights(checkInDate, checkOutDate)}</th>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default SearchResults;
