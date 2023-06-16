import React, { useState, useEffect } from "react";
import CustomerProfile from "./CustomerProfile";
import moment from "moment";

const SearchResults = (props) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [userID, setUserID] = useState("");
  const [userData, setUserData] = useState("");

  const clickHandler = (newID) => {
    if (selectedRows.includes(newID)) {
      setSelectedRows(selectedRows.filter((id) => id !== newID));
    } else {
      setSelectedRows([...selectedRows, newID]);
    }
  };

  const userIDHandler = (userID) => {
    return setUserID(userID);
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${userID}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [userID]);

  return (
    <React.Fragment>
      <table className="tabel">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check In Date</th>
            <th>Check Out Date</th>
            <th>Number of Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((person) => {
            const startDate = moment(person.checkInDate);
            const endDate = moment(person.checkOutDate);
            const duration = moment.duration(endDate.diff(startDate));
            const daysDifference = duration.asDays();
            return (
              <tr
                key={person.id}
                onClick={() => clickHandler(person.id)}
                className={selectedRows.includes(person.id) ? "selected" : ""}
              >
                <td>{person.id}</td>
                <td>{person.title}</td>
                <td>{person.firstName}</td>
                <td>{person.surname}</td>
                <td>{person.email}</td>
                <td>{person.roomId}</td>
                <td>{person.checkInDate}</td>
                <td>{person.checkOutDate}</td>
                <td>{Math.round(daysDifference)}</td>
                <td>
                  <button onClick={() => userIDHandler(person.id)}>
                    Show profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile
        customerID={userData.id}
        customerEmail={userData.email}
        customerPhone={userData.phoneNumber}
        customerVIP={userData.vip}
      />
    </React.Fragment>
  );
};

export default SearchResults;
