import React from "react";
import Moment from "moment";
import SearchResult from "./SearchResult";

function SearchResults({ results, showProfile }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">firstName</th>
            <th scope="col">surName</th>
            <th scope="col">email</th>
            <th scope="col">roomId</th>
            <th scope="col">checkInDate</th>
            <th scope="col">checkOutDate</th>
            <th scope="col">numberOfNight</th>
            <th scope="col">profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, i) => {
            return (
              <SearchResult
                key={i}
                item={item}
                checkDiff={checkDiff}
                showProfile={showProfile}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
let checkDiff = (InDate, OutDate) => {
  const checkInDate = Moment(InDate, "YYYY-MM-DD");
  const checkOutDate = Moment(OutDate, "YYYY-MM-DD");
  const diff = checkOutDate.diff(checkInDate, "days");
  return diff;
};
export default SearchResults;
