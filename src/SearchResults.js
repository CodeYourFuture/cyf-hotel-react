import moment from "moment";
import React, { useState } from "react";
import SearchResultRow from "./SearchResultRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ bookings }) => {
  const [customerId, setCustomerId] = useState(null);

  const handleShowProfileButtonClick = id => {
    setCustomerId(id);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => {
            const checkIn = moment(booking.checkInDate);
            const checkOut = moment(booking.checkOutDate);
            const nights = checkOut.diff(checkIn, "days");

            return (
              <SearchResultRow
                booking={booking}
                nights={nights}
                buttonClickHandler={handleShowProfileButtonClick}
              />
            );
          })}
        </tbody>
      </table>
      {customerId != null ? <CustomerProfile customerId={customerId} /> : null}
    </>
  );
};

export default SearchResults;
