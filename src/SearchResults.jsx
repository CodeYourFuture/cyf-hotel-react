import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

function SearchResults(props) {
  const [active, setActive] = useState("");
  const [showProfile, setShowProfile] = useState("");

  function tableRowClick(id) {
    console.log(id);
    if (id === active) {
      setActive("");
    } else {
      setActive(id);
    }
  }

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
            <th scope="col">Profiles</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((row) => {
            let a = moment(row.checkInDate, "YYYY-MM-DD");
            let b = moment(row.checkOutDate, "YYYY-MM-DD");
            return (
              <tr
                key={row.id}
                onClick={() => tableRowClick(row.id)}
                style={{
                  backgroundColor: active === row.id ? "#CBC3E3" : "white",
                }}
              >
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.firstName}</td>
                <td>{row.surname}</td>
                <td>{row.email}</td>
                <td>{row.roomId}</td>
                <td>{row.checkInDate}</td>
                <td>{row.checkOutDate}</td>
                <td>{b.diff(a, "days")}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => setShowProfile(row.id)}
                  >
                    Show profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showProfile && <CustomerProfile id={showProfile} />}
    </div>
  );
}

export default SearchResults;
