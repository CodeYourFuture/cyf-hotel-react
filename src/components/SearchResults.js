import React, { useState, useEffect } from "react";
import GuestRow from "./GuestRow.js";
import CustomerProfile from "./CustomerProfile.js";

const SearchResults = ({ bookings, submit }) => {
  const [profileID, setProfileID] = useState(null);

  const [guestID, setGuestID] = useState(null);

  useEffect(() => {
    if (guestID !== null) {
      fetch(`https://cyf-react.glitch.me/customers/${guestID}`)
        .then(res => res.json())
        .then(data => {
          setProfileID(data);
          console.table(data);
        })
        .catch(err => console.error(err));
    }
  }, [guestID]);

  let filter = bookings.filter(
    guest =>
      guest.firstName.toLowerCase().includes(submit.toLowerCase()) ||
      guest.surname.toLowerCase().includes(submit.toLowerCase())
  );

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr className="bg-dark text-white">
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Number of nights stay</th>
            <th scope="col">Customer Info</th>
          </tr>
        </thead>
        <tbody>
          {filter.map((guest, index) => (
            <GuestRow guest={guest} key={index} setGuestID={setGuestID} />
          ))}
        </tbody>
      </table>
      <CustomerProfile profileID={profileID} guestID={guestID} />
    </div>
  );
};

export default SearchResults;
