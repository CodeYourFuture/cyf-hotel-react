import React, { useState } from "react";
import fakeBookings from "./data/fakeBookings.json";
import moment from "moment";

//{fakeBookings[1].id}
//alert(moment(moment(fakeBookings[0].check)).diff(moment(),'days))
const SearchResults = prop => {
  // console.log(prop.people)
  //alert(prop.people.title)
  let cssStyleTr = {};
  let [state, setState] = useState(0);
  function select() {
    if (state === 1) {
      //selectRow. backgroundColor='rgb(255,0,0)'
      setState(0);
      alert(state);
    }
    if (state === 0) {
      setState(1);
      alert(state);
    }
  }

  if (state === 1) {
  }
  return (
    <div class="table-responsive">
      <table class="table table-striped table-light table-bordered table-hover table-sm">
        <caption>List of users</caption>
        <thead class="thead-light">
          <th scope="col">#</th>
          <th scop="col">Title</th>
          <th scope="col" style={{ width: "100px" }}>
            First Name
          </th>
          <th scope="col">SurNAme</th>
          <th scope="col">Email</th>
          <th scope="col">RoomID</th>
          <th scope="col" style={{ width: "150px" }}>
            Check in Date
          </th>
          <th scope="col" style={{ width: "150px" }}>
            Check out Date
          </th>
          <th scope="col">stay</th>
          <th scope="col">select</th>
        </thead>
        <tbody>
          {fakeBookings.map(function(props) {
            return (
              <tr>
                <td>{props.id}</td>
                <td>{props.title}</td>
                <td>{props.firstName}</td>
                <td>{props.surname}</td>
                <td>{props.email}</td>
                <td>{props.roomId}</td>
                <td>{props.checkInDate}</td>
                <td>{props.checkOutDate}</td>
                <td>
                  Mr {props.firstName} has a booking for{" "}
                  {moment(moment(props.checkOutDate, "YYYY-MM-DD")).diff(
                    moment(props.checkInDate, "YYYY-MM-DD"),
                    "days"
                  )}{" "}
                  nights
                </td>
                <td>
                  <button onClick={select}>click</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default SearchResults;
