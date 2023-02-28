import React from "react";
import moment from "moment";

const headings = [
  "Id",
  "Title",
  "First Name",
  "Surname",
  "Email",
  "room Id",
  "Check-In",
  "Check-Out",
  "Night"
];
const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          {headings.map(heading => {
            return <th scope="col">{heading}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {props.results.map(result => {
          return (
            <tr>
              <th scope="row">{result.id}</th>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>
                {moment(result.checkOutDate).diff(
                  moment(result.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
