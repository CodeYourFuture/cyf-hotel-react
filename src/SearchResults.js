import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

function SearchResults(props) {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
            <th scope="col">Something</th>
          </tr>
        </thead>
        <tbody>
          {props.FakeBookings.map((info, i) => (
            <tr key={i}>
              <td>{info.id}</td>
              <td>{info.title}</td>
              <td>{info.firstName}</td>
              <td>{info.surname}</td>
              <td>{info.email}</td>
              <td>{info.roomId}</td>
              <td>{info.checkInDate}</td>
              <td>{info.checkOutDate}</td>
              <td>
                {moment(info.checkOutDate).diff(
                  moment(info.checkInDate),
                  "days"
                )}
              </td>
              <td>
                <button
                  onClick={() => setSelectedId(info.id)}
                  className="btn btn-primary"
                >
                  Show profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedId !== null && <CustomerProfile id={selectedId} />}
    </div>
  );
}

export default SearchResults;
