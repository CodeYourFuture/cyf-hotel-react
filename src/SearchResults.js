import React from "react";
import FakeBookings from "./data/fakeBookings.json";
import moment from "moment";

function SearchResults() {
  const headings = [
    `id`,
    `title`,
    `first name`,
    `surname`,
    `email`,
    `room id`,
    `check in date`,
    `check out date`,
    `number of nights`
  ];
  const DisplayData = FakeBookings.map(info => {
    return (
      <tr>
        <th scope="row">
          <td>{info.id}</td>
        </th>
        <td>{info.title}</td>
        <td>{info.firstName}</td>
        <td>{info.surname}</td>
        <td>{info.email}</td>
        <td>{info.roomId}</td>
        <td>{info.checkInDate}</td>
        <td>{info.checkOutDate}</td>
        <td>
          {moment(info.checkOutDate).diff(moment(info.checkInDate), "day")}
        </td>
      </tr>
    );
  });

  return (
    <div className="table-container">
      <table className="table table-striped">
        <thead>
          <tr>
            {headings.map(heading => {
              return <th scope="col">{heading}</th>;
            })}
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default SearchResults;
