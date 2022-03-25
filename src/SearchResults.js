import React from "react";
import moment from "moment";

const headings = [
  "id",
  "Title",
  "First Name",
  "Surname",
  "Email",
  "Room id",
  "Check in date",
  "Check out date",
  "Number of nights"
];

const SearchResults = props => {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          {headings.map(heading => {
            return <th scope="col">{heading}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.results.map((person, index) => {
          var CheckIn = moment(person.checkInDate);
          var CheckOut = moment(person.checkOutDate);
          return (
            <tr key={index}>
              <th scope="col">{person.id}</th>
              <td>{person.title}</td>
              <td>{person.firstName}</td>
              <td>{person.surname}</td>
              <td>{person.email}</td>
              <td>{person.roomId}</td>
              <td>{person.checkInDate}</td>
              <td>{person.checkOutDate}</td>
              <td>{CheckOut.diff(CheckIn, "days")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;
