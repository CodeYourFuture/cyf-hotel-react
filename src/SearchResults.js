import React from "react";
import FakeBookings from "./data/fakeBookings.json";
import moment from "moment";

const SearchResults = () => {
  return (
    <div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {FakeBookings.map(props => {
            return (
              <tr>
                <td>{props.id}</td>
                <td>{props.title}</td>
                <td>{props.firstName}</td>
                <td>{props.surname}</td>
                <td>{props.email}</td>
                <td>{props.roomId}</td>
                <td>{props.checkInDate}</td>
                <td>{props.checkOutDate}</td>
                <td>
                  {moment(props.checkOutDate).diff(
                    moment(props.checkInDate),
                    "days"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
