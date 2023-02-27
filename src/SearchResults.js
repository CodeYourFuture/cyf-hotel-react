import React, { useCallback, useState } from "react";
import BookingsRow from "./BookingsRow";
import CustomerProfile from "./CustomerProfile";

const SearchResults = (props) => {
  let [guestProfile, setGuestProfile] = useState(null);

  const sortColumnWithNumbers = useCallback((event) => {}, []);

  const sortColumnWithText = useCallback(() => {}, []);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col" onClick={sortColumnWithNumbers}>
              Id
            </th>
            <th scope="col" onClick={sortColumnWithText}>
              Title
            </th>
            <th scope="col" onClick={sortColumnWithText}>
              First name
            </th>
            <th scope="col" onClick={sortColumnWithText}>
              Surname
            </th>
            <th scope="col" onClick={sortColumnWithText}>
              EMAIL
            </th>
            <th scope="col" onClick={sortColumnWithNumbers}>
              Room id
            </th>
            <th scope="col" onClick={sortColumnWithNumbers}>
              Check in date
            </th>
            <th scope="col" onClick={sortColumnWithNumbers}>
              Check out date
            </th>
            <th scope="col" onClick={sortColumnWithNumbers}>
              Number of nights
            </th>
            <th scope="col" onClick={sortColumnWithNumbers}>
              Profile
            </th>
          </tr>
        </thead>
        <tbody>
          {props.results !== ""
            ? props.results.map((guest) => (
                <BookingsRow
                  key={guest.id}
                  guest={guest}
                  changeGuestProfile={setGuestProfile}
                />
              ))
            : null}
        </tbody>
      </table>
      <CustomerProfile guest={guestProfile} />
    </div>
  );
};

export default SearchResults;
