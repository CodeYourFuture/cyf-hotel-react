import moment from "moment";
import React from "react";

export default function SearchResults({ results }) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">No of nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map((person, index) => {
            return (
              <tr>
                <th scope="row" key={index}>
                  {person.id}
                </th>
                <td>{person.title}</td>
                <td>{person.firstName}</td>
                <td>{person.surname}</td>
                <td>{person.email}</td>
                <td>{person.roomId}</td>
                <td>{person.checkInDate}</td>
                <td>{person.checkOutDate}</td>
                <td>
                  {moment(person.checkOutDate).diff(person.checkInDate, "days")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
