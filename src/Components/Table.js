import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const Table = ({ results }) => {
  const [showId, setShowId] = useState(null);

  const IdCheck = (id) => {
    setShowId(showId === id ? null : id);
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>
                {moment(result.checkOutDate).diff(result.checkInDate, "days")}
              </td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => IdCheck(result.id)}
                >
                  Show Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showId && (
        <div className="profile-container">
          <CustomerProfile id={showId} />
          <button className="btn btn-secondary" onClick={() => setShowId(null)}>
            Close Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
