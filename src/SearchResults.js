import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";
import "./App.css";

function SearchResults(props) {
  const [selectedId, setSelectedId] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  if (props.Bookings.length === 0) return <div>Loading.....</div>;
  else
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
              <th scope="col">Profile</th>
            </tr>
          </thead>
          <tbody>
            {props.Bookings.map((info, i) => (
              <tr
                key={i}
                className={selectedId === info.id ? "selected" : null}
                onClick={() => {
                  if (info.id === selectedId) {
                    setSelectedId(null);
                    setShowProfile(false);
                  } else {
                    setSelectedId(info.id);
                  }
                }}
              >
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
                    onClick={event => {
                      event.stopPropagation();
                      if (info.id !== selectedId) {
                        setSelectedId(info.id);
                      }

                      setShowProfile(true);
                    }}
                    className="btn btn-primary"
                  >
                    Show profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showProfile === true && (
          <CustomerProfile
            id={selectedId}
            onClose={() => setShowProfile(false)}
          />
        )}
      </div>
    );
}

export default SearchResults;
