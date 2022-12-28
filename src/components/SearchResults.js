import moment from "moment/moment";
import React from "react";
import FakeBookings from "../data/fakeBookings.json";

let dateIn = FakeBookings.map(val => {
  let elements = val["checkInDate"].split("-");
  elements.map(el => Number(el));
  return moment(elements);
});
let dateOut = FakeBookings.map(val => {
  let elements = val["checkOutDate"].split("-");
  elements.map(el => Number(el));
  return moment(elements);
});
let values = [];
for (let i = 0; i < dateIn.length; i++) {
  let difference = dateIn[i].diff(dateOut[i], "days");
  values.push(difference);
}

console.log(values);
export const SearchResults = props => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">E-mail</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Num. of Night(s)</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((val, index) => {
            return (
              <tr>
                <td>{props.results[index]["title"]}</td>
                <td>{props.results[index]["firstName"]}</td>
                <td>{props.results[index]["surname"]}</td>
                <td>{props.results[index]["email"]}</td>
                <td>{props.results[index]["roomId"]}</td>
                <td>{props.results[index]["checkInDate"]}</td>
                <td>{props.results[index]["checkOutDate"]}</td>
                <td>{values[index] * -1}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
