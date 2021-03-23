import React, { useState } from "react";
import SearchRow from "./SearchRow";
import CustomerProfile from "./CustomerProfile";
const SearchResults = ({ searchReslt }) => {
  const [customerId, setCustomerId] = useState("");
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {searchReslt.map(booking => (
            <SearchRow
              bookingRow={booking}
              key={booking.id}
              setCustomerId={setCustomerId}
            />
          ))}
        </tbody>
      </table>
      {customerId && <CustomerProfile id={customerId} />}
    </div>
  );
};

export default SearchResults;
