import React from "react";
import moment from "moment";
// import { useState } from "react";

const data = [
  {
    title: "",
    firstName: "",
    surname: "",
    Email: "",
    Room: "",
    CheckInDate: "",
    CheckOutDate: "",
    stayNights: "",
  },
];
function SearchResults({ bookingResults }) {
  const columnKey = [
    "id",
    "title",
    "firstName",
    "surname",
    "email",
    "roomId",
    "checkInDate",
    "checkOutDate",
    "nightsIn",
  ];
  return (
    <table class="table table-striped table-dark">
      <thead>
        <tr className="title-table">
          <th scope="col">#</th>
          {columnKey.map((column) => (
            <th scope="col">{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bookingResults.map((result, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{result.id}</td>
            <td>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{result.checkInDate}</td>
            <td>{result.checkOutDate}</td>
            <tg>{result.stayNights}</tg>
            <td>{moment(result.checkOutDate).diff(result.checkInDate, "days")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
// const numbersDoubled = numbers.map((number) => number * 2);

// const SearchResults = (props) => {}
// let allData = props.results
// return (//
//     //
//     <table class="table table-striped table-dark">
//     <thead>
//       <tr className="title-table">
//         <th scope="col">#</th>
//         <th scope="col">Title</th>
//         <th scope="col">First Name</th>
//         <th scope="col">Surname</th>
//         <th scope="col">Email</th>
//         <th scope="col">Room id</th>
//         <th scope="col">Check in date</th>
//         <th scope="col">Check out date</th>
//       </tr>
//     </thead>
//     <tbody>

//       <tr>
//         <th scope="row">1</th>
//         <td>Mx</td>
//         <td>Jeo</td>
//         <td>Smith</td>
//         <td>Smith.jeo@gmail.com</td>
//         <td>23A</td>
//         <td>04/06/23</td>
//         <td>09/06/23</td>
//       </tr>
//       <tr>
//         <th scope="row">2</th>
//         <td>Miss</td>
//         <td>Eva</td>
//         <td>Marie</td>
//         <td>Meva2002@icloud.com</td>
//         <td>33 B</td>
//         <td>01/06/23</td>
//         <td>10/06/23</td>
//       </tr>
//       <tr>
//         <th scope="row">3</th>
//         <td>Miss</td>
//         <td>Claire</td>
//         <td>Johnson</td>
//         <td>6foxes@icloud.com</td>
//         <td>33 C</td>
//         <td>06/06/2023</td>
//         <td>13/06/23</td>
//       </tr>
//     </tbody>
//   </table>
//     ;

export default SearchResults;
