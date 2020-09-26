import React from "react";
import moment from "moment";
//moment().format();

function SearchResults(props) {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">staying for</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(person => (
          <tr scope="row">
            <th>{person.id}</th>
            <th>{person.title}</th>
            <th>{person.firstName}</th>
            <th>{person.surname}</th>
            <th>{person.email}</th>
            <th>{person.roomId}</th>
            <th>{person.checkInDate}</th>
            <th>{person.checkOutDate}</th>
            <th>
              {moment(person.checkOutDate).diff(person.checkInDate, "days")}{" "}
              days
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;
