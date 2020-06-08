import React from "react";
import BookingRows from "./BookingRows.js";

const SearchResults = props => {
  return (
    <div id="SearchResults" className="SearchResults_CSS">
      <table>
        <thead>
          <tr>
            <th className="Head_TH_CSS">Title</th>
            <th className="Head_TH_CSS">First Name</th>
            <th className="Head_TH_CSS">Last Name</th>
            <th className="Head_TH_CSS">Email</th>
            <th className="Head_TH_CSS">Room id</th>
            <th className="Head_TH_CSS">Check in date</th>
            <th className="Head_TH_CSS">Check out date</th>
            <th className="Head_TH_CSS">Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((element, index) => {
            return <BookingRows element={element} index={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
