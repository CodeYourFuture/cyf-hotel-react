import React from "react";
import FakeBookings from "./data/fakeBookings.json";

// id, title, first name, surname, email, room id, check in date and check out date

// function SearchResults() {
//     console.log();
//   return <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">Id</th>
//       <th scope="col">First Name</th>
//       <th scope="col">Surname</th>
//       <th scope="col">Email</th>
//       <th scope="col">Room Id</th>
//       <th scope="col">Check In Date</th>
//       <th scope="col">Check Out Date</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//              <ul>
//         {results.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Larry</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Larry</td>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Larry</td>
//       <td>Larry</td>
//       <td>the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>
// }

function SearchResults() {
  const DisplayData = FakeBookings.map(info => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.firstName}</td>
        <td>{info.surname}</td>
        <td>{info.email}</td>
        <td>{info.roomId}</td>
        <td>{info.checkInDate}</td>
        <td>{info.checkOutDate}</td>
      </tr>
    );
  });

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default SearchResults;
