import React from "react";
const moment = require("moment");
import TableRow from "./TableRow";

const headings = [
  "id",
  "title",
  "firstName",
  "surname",
  "email",
  "roomId",
  "checkInDate",
  "checkOutDate",
  "Duration"
];
function SearchResults(props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {headings.map((heading, index) => {
              return (
                <th key={index}>
                  {/* scope="col" */}
                  {heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.bookings.map(booking => {
            return <TableRow key={booking.id} data={booking} />;
          })}
        </tbody>
      </table>
      <hr />
    </>
  );
}
export default SearchResults;
