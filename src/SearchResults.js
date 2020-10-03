import React, { useState } from "react";

import moment from "moment";

//{fakeBookings[1].id}
//alert(moment(moment(fakeBookings[0].check)).diff(moment(),'days))
const SearchResults = prop => {
  let currentId;
  let [color, changeColor] = useState("white");
  function setColor(event) {
    //alert(event.currentTarget.id.backgroundColor)
    // alert(event.currentTarget.style.backgroundColor)
    currentId = document.getElementById(event.currentTarget.id);
    //alert(currentId..style.backgroundColor)
    if (currentId.style.backgroundColor === "white") {
      //alert(currentId.style.backgroundColor)
      //changeColor('blue')
      document.getElementById(event.currentTarget.id).style.backgroundColor =
        "#1E90FF";

      //changeColor('blue')
    } else {
      changeColor("white");
      //currentId.style.backgroundColor='white'
      //changeColor('white')
      document.getElementById(event.currentTarget.id).style.backgroundColor =
        "white";
    }
  }

  return (
    <div class="table-responsive" style={{ fontSize: "14px" }}>
      <table class="table table-striped table-light table-bordered table-hover table-sm">
        <caption>List of users</caption>
        <thead class="thead-light">
          <th scope="col">#</th>
          <th scop="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">SurNAme</th>
          <th scope="col">Email</th>
          <th scope="col">RoomID</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out Date</th>
          <th scope="col">stay</th>
          <th scope="col">select</th>
        </thead>
        <tbody>
          {prop.people.map(function(props) {
            return (
              <tr
                id={props.id}
                style={{ backgroundColor: color }}
                onClick={setColor}
              >
                <td>{props.id}</td>
                <td>{props.title}</td>
                <td>{props.firstName}</td>
                <td>{props.surname}</td>
                <td>{props.email}</td>
                <td style={{ textAlign: "center" }}>{props.roomId}</td>
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
                <td id="d">
                  <button>click</button>
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
