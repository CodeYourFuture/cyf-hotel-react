import React, { useState } from "react";
import SearchResultRow from "./SearchResultRow";
import CustomerProfile from "./CustomerProfile";

function SearchResults({ FakeBookings, searchVal }) {
  let [profile, setProfile] = useState("");
  const changeProfile = id => {
    setProfile(id);
  };

  let filteredData = FakeBookings.filter(data => {
    return (
      data.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
      data.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(detail => {
            return (
              <SearchResultRow
                id={detail.id}
                title={detail.title}
                firstName={detail.firstName}
                surname={detail.surname}
                email={detail.email}
                roomId={detail.roomId}
                checkInDate={detail.checkInDate}
                checkOutDate={detail.checkOutDate}
                changeProfile={changeProfile}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile profile={profile} />
    </div>
  );
}
export default SearchResults;
