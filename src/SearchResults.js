import React, { useState } from "react";
import SearchTableRow from "./SearchTableRow";
import CustomerProfie from "./CustomerProfie";

const SearchResults = ({ results, setBookings }) => {
  const [selectedProfile, setSelectedProfile] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  const sortTable = () => {
    if (!isSorted) {
      const sortedBookings = results.sort((a, b) =>
        a.surname.localeCompare(b.surname)
      );
      setIsSorted(true);
      setBookings([...sortedBookings]);
    } else {
      const reversedBookings = results.reverse();
      setBookings([...reversedBookings]);
    }
  };

  const selectId = customerId => {
    setSelectedProfile(customerId);
  };
  return (
    <div className="text-white">
      <table className="table">
        <thead>
          <tr onClick={sortTable}>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">E-mail</th>
            <th scope="col">Room No</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Numer of Nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map((booking, index) => {
            return (
              <SearchTableRow
                booking={booking}
                key={index}
                selectId={selectId}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfie id={selectedProfile} />
    </div>
  );
};

export default SearchResults;
