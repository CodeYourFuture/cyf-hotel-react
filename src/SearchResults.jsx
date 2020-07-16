import React from "react";
import moment from "moment";

function SearchResults(props) {
  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">email</th>
            <th scope="col">RoomId</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Number Of Nights</th>
          </tr>
        </thead>
        {props.results.map(customer => {
          return (
            <tbody>
              <tr>
                <td>{customer.id}</td>
                <td>{customer.title}</td>
                <td>{customer.firstName}</td>
                <td>{customer.surname}</td>
                <td>{customer.email}</td>
                <td>{customer.roomId}</td>
                <td>{customer.checkInDate}</td>
                <td>{customer.checkOutDate}</td>
                <td>
                  {moment(customer.checkOutDate).diff(
                    moment(customer.checkInDate),
                    "days"
                  )}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default SearchResults;
