import React from "react";
import Moment from "moment";
// import fakebookings from "../data/fakeBookings.json";

// function Card(props) {
//   return (
//     <tr>
//       <th scope="row">{props.id}</th>
//       <td>{props.title}</td>
//       <td>{props.firstName}</td>
//       <td>{props.surname}</td>
//       <td>{props.email}</td>
//       <td>{props.roomId}</td>
//       <td>{props.checkInDate}</td>
//       <td>{props.checkOutDate}</td>

//       <td></td>
//     </tr>
//   );
// }
let checckDiff = (InDate, OutDate) => {
  const checkInDate = Moment(InDate, "YYYY-MM-DD");
  const checkOutDate = Moment(OutDate, "YYYY-MM-DD");
  const diff = checkOutDate.diff(checkInDate, "days");
  return diff;
};

function SearchResults({ results }) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">firstname</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">roomid</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
            <th scope="col">number of nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.firstName}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.roomId}</td>
                <td>{item.checkInDate}</td>
                <td>{item.checkOutDate}</td>

                <td>{checckDiff(item.checkInDate, item.checkOutDate)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
