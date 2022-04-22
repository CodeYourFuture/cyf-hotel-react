import React, { useState } from "react";
import TableRow from "./TableBodyRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ reservations }) => {
  let [customerId, setCustomerId] = useState(null);

  const handleButtonClick = resId => {
    setCustomerId(resId);
  };

  return (
    <div className="table-wrapper">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check-In Date</th>
            <th scope="col">Check-Out Date</th>
            <th scope="col">Nights Staying</th>
            <th scope="col">Guest Details</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, ind) => (
            <TableRow
              key={ind}
              reservation={reservation}
              handleButtonClick={handleButtonClick}
            />
          ))}
        </tbody>
      </table>
      {customerId && <CustomerProfile id={customerId} />}
    </div>
  );
};

export default SearchResults;
