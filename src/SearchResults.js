import moment from "moment";
import React from "react";

const headers = [
  "id",
  "title",
  "firstName",
  "surname",
  "email",
  "roomId",
  "checkInDate",
  "checkOutDate",
  "#Nights"
];

function SearchResults(props) {
  return (
    <table class="styled-table">
      <thead>
        <tr>
          {headers.map(heading => {
            return <th scope="col">{heading} </th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.bookings.map(booked => {
          return (
            <tr>
              <th scope="row">{booked.id}</th>
              {headers.map(heading => {
                if (heading === "id") {
                  return null;
                } else if (heading === "#Nights") {
                  const inDate = moment(booked.checkOutDate);
                  const outDate = moment(booked.checkInDate);
                  return <td>{inDate.diff(outDate, "days")} </td>;
                } else {
                  return <td>{booked[heading]}</td>;
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
