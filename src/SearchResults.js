import moment from "moment";
import React, { useState, useEffect } from "react";
// import Data from "./data/fakeBookings.json";

function SearchResults() {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(result => {
        setFetchedData(result);
      });
    console.log(fetchedData);
  }, []);
  // const [bookings, setBokking] = useState(Data);
  const DisplayData = fetchedData.map(info => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.title}</td>
        <td>{info.firstName}</td>
        <td>{info.surname}</td>
        <td>{info.email}</td>
        <td>{info.roomId}</td>
        <td>{info.checkInDate}</td>
        <td>{info.checkOutDate}</td>
        <td>
          {moment(info.checkOutDate).diff(moment(info.checkInDate), "days")}
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tittle</th>
            <th>first name</th>
            <th>surname</th>
            <th>Email</th>
            <th>Room id</th>
            <th>check in date</th>
            <th>check out id</th>
            <th>night left</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default SearchResults;
