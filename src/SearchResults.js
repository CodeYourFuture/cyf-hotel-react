import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [idProfile, setIdProfile] = useState(0);

  const showProfileHandler = id => {
    setIdProfile(() => id);
    console.log(idProfile);
  };

  const [selectedBookingId, setSelectedBookingId] = useState(null);
  return (
    <div>
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in</th>
            <th scope="col">Check out</th>
            <th scope="col">Permanence</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody className="table-striped">
          {props.results.map(result => {
            return (
              <tr
                key={result.id}
                className={
                  selectedBookingId === result.id ? "table-warning" : ""
                }
                onClick={() =>
                  setSelectedBookingId(
                    result.id === selectedBookingId ? null : result.id
                  )
                }
              >
                <td>{result.id}</td>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>
                  {moment(result.checkOutDate).diff(result.checkInDate, "day") +
                    " nights"}
                </td>
                <td>
                  <button
                    onClick={() => showProfileHandler(result.id)}
                    className="btn btn-primary"
                  >
                    Show profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={idProfile} />
    </div>
  );
};
export default SearchResults;
