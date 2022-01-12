import React, { useState } from "react";

import GuestRecords from "../components/GuestRecord";
import GuestPro from "../components/GuestRecord";
import Sort from "../components/Sort";

const HotelBookings = [
  "Id",
  "Title",
  "First Name",
  "SurName",
  "Email",
  "Room id",
  "Check In",
  "Check Out"
];

const SearchResults = props => {
  console.log("here is new form" + props.newForm);
  const [guestId, setGuestId] = useState("");

  const guestProHandler = e => {
    setGuestId(e.target.id);
  };

  return (
    <div className="booking">
      <table>
        <tr>
          {HotelBookings.map(booking => {
            return (
              <Sort key={booking} booking={booking} data={props.fakeBookings} />
            );
          })}
          <th>Nights</th>
          <th>Show Profile</th>
        </tr>
        {props.fakeBookings.map((item, index) => {
          return (
            <GuestRecords
              key={index}
              updatedId={guestProHandler}
              class="select"
            />
          );
        })}
      </table>
      <GuestPro id={guestId} />
    </div>
  );
};

export default SearchResults;
