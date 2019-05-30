import React from "react";
import FakeBookings from "./data/fakeBookings.json";
import moment from "moment";

const SearcResults = () => {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">FirstName</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">RoomID</th>
          <th scope="col">CheckInDate</th>
          <th scope="col">checkOutDate</th>
          <th scope="col">Number Of Days</th>
        </tr>
      </thead>
      <tbody>
        {FakeBookings.map(item => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.firstName}</td>
              <td>{item.surname}</td>
              <td>{item.email}</td>
              <td>{item.roomId}</td>
              <td>{item.checkInDate}</td>
              <td>{item.checkOutDate}</td>
              <td>
                {moment(item.checkOutDate).diff(
                  moment(item.checkInDate),
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

export default SearcResults;
