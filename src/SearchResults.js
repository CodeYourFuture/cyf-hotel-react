// import React from "react";
// import moment from "moment";

// const SearchResults = ({ results }) => {
//   return (
//     <table className="table">
//       <thead className="thead-dark">
//         <tr>
//           <th scope="col">Title</th>
//           <th scope="col">First Name</th>
//           <th scope="col">Surname</th>
//           <th scope="col">Email</th>
//           <th scope="col">Room id</th>
//           <th scope="col">Check in date</th>
//           <th scope="col">Check out date</th>
//           <th scope="col">nights</th>
//         </tr>
//       </thead>
//       <tbody>
//         {results.map(booking => {
//           return (
//             <tr>
//               <td>{booking.title}</td>
//               <td>{booking.firstName}</td>
//               <td>{booking.surname}</td>
//               <td>{booking.email}</td>
//               <td>{booking.roomId}</td>
//               <td>{booking.checkInDate}</td>
//               <td>{booking.checkOutDate}</td>
//               <td>
//                 {moment(booking.checkOutDate).diff(booking.checkInDate, "days")}
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default SearchResults;
import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  const [Clicked, setClicked] = useState(false);
  return (
    <table className="table main">
      <tr>
        <th>title</th>
        <th>firstName</th>
        <th>surname</th>
        <th>email</th>
        <th>roomId</th>
        <th>checkInDate</th>
        <th>checkOutDate</th>
        <th>NightStayed</th>
      </tr>
      <tbody>
        {results.map(record => {
          return (
            <tr
              onClick={() => setClicked(!Clicked)}
              style={Clicked ? { backgroundColor: "red" } : {}}
            >
              <td>{record.title}</td>
              <td>{record.firstName}</td>
              <td>{record.surname}</td>
              <td>{record.email}</td>
              <td>{record.roomId}</td>
              <td>{record.checkInDate}</td>
              <td>{record.checkOutDate}</td>
              <td>{record.NightStayed}</td>
              <td>
                {moment(record.checkOutDate).diff(record.checkInDate, "days")}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
