import moment from "moment";
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  return (
    <div className="table">
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
            <th># of Nights</th>
            <th>Profile</th>
          </tr>

          {/* Data to be passed into the table */}
          {results.map((info, index) => {
            return <CustomRow info={info} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

// Component used to render table rows
function CustomRow({ info, index }) {
  const [highlight, setHighlight] = useState(false);
  const [id, setId] = useState(false);

  // Variables declared to log number of nights booked
  let a = moment(info.checkInDate);
  let b = moment(info.checkOutDate);

  return (
    // Adding table data
    <tr
      key={index}
      style={highlight ? { border: "2px solid green" } : {}}
      onClick={() => setHighlight(!highlight)}
    >
      <td>{info.id}</td>
      <td>{info.title}</td>
      <td>{info.firstName}</td>
      <td>{info.surname}</td>
      <td>{info.email}</td>
      <td>{info.roomId}</td>
      <td>{info.checkInDate}</td>
      <td>{info.checkOutDate}</td>
      <td>{b.diff(a, "days")}</td>
      <td>
        <button onClick={() => setId(!id)}>Show Profile</button>
      </td>
      {id ? (
        <td>
          <CustomerProfile id={info.id} />
        </td>
      ) : null}
    </tr>
  );
}
export default SearchResults;
