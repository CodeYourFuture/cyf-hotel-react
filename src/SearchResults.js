import moment from "moment";
import React, { useState } from "react";
import OneRecord from "./OneRecord";

const HotelBookings = [
  `Id`,
  `Title`,
  `First name`,
  `Surname`,
  `Email`,
  `Room id`,
  `Check in date`,
  `Check out date`
];
const SearchResults = props => {
  return (
    <div class="BookingTable">
      <table>
        <tr>
          {HotelBookings.map(element => {
            return <th>{element}</th>;
          })}
          <th>Nights</th>
        </tr>
        {props.fakeBookings.map((item, index) => {
          return <OneRecord item={item} />;
        })}
      </table>
    </div>
  );
};

export default SearchResults;
