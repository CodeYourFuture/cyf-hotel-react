import React from "react";
import HighlighterIndividualRow from "./Highlighter.js";
import CustomerProfile from "./CustomerProfile.js";

const SearchResults = ({ results, getCustomerId, id }) => {
  console.log(results);
  return (
    <div>
      <table id="BookingsTable">
        <thead>
          <tr>
            <th id="BookingInfo">id</th>
            <th id="BookingInfo">title</th>
            <th id="BookingInfo">first name</th>
            <th id="BookingInfo">surname</th>
            <th id="BookingInfo">email</th>
            <th id="BookingInfo">room id</th>
            <th id="BookingInfo">check in date</th>
            <th id="BookingInfo">check out date</th>
            <th id="BookingInfo">number of nights</th>
            <th id="BookingInfo">Customer profile</th>
          </tr>
          {results.map(booking => (
            <HighlighterIndividualRow
              item={booking}
              getCustomerId={getCustomerId}
            />
          ))}
        </thead>
      </table>
      {id && <CustomerProfile id={id} />}
    </div>
  );
};

export default SearchResults;
