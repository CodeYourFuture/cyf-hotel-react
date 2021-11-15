import React from "react";
import moment from "moment";

//Solution for step 5 lesson 1 -Hardcoded data
// const SearchResults = () => {
//     let bookings = ["Id", "Title", "First Name", "Surname", "Email"," Room Id", "Check-in Date", "Check-out Date"]
//     return (
//       <table>
//         <tr>
//           {bookings.map((info) => (
//             <th>{info}</th>
//           ))}
//         </tr>
//         <tr>
//           <td>1234</td>
//           <td>Mr</td>
//           <td>Xulescu</td>
//           <td>xyz</td>
//           <td>xyz@gmail/com</td>
//           <td>123</td>
//           <td>{new Date().toLocaleDateString()}</td>
//           <td>{new Date().toLocaleDateString()}</td>
//         </tr>
//       </table>
//     );
// }

const SearchResults = props => {
  const tableHeadings = Object.keys(props.results[0]);
  return (
    <table>
      <caption>Hotel Bookings</caption>
      <thead>
        <tr>
          {tableHeadings.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
          <th>nightsNumbers</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((booking, index) => {
          let checkIn = moment(booking.checkInDate);
          let checkOut = moment(booking.checkOutDate);
          return (
            <tr key={index}>
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{checkOut.diff(checkIn, "days")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
