import React, { useState } from "react";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";

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
  const tableHeadings = [
    "Id",
    "Title",
    "First Name",
    "Surname",
    "Email",
    "Room Id",
    "Check-in Date",
    "Check-out date"
  ];
  const [id, setId] = useState(null);

  const getId = clickedId => {
    setId(clickedId);
  };
  return (
    <div>
      <table>
        <caption className="Caption">Hotel Bookings</caption>
        <thead>
          <tr>
            {tableHeadings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
            <th>Nights Number</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((booking, index) => {
            return <TableRow key={index} booking={booking} func={getId} />;
          })}
        </tbody>
      </table>
      {id == null ? "" : <CustomerProfile customerId={id} />}
    </div>
  );
};

export default SearchResults;
